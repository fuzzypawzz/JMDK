import type { SubscriberNotification } from '@/JMDK.Core/helpers/observable/observable.types'
import { injectable } from 'inversify'
import { observable, autorun } from 'mobx'
import type { FrameworkSpecificView } from './presenter-base.types'
import { cloneDeep, isEmpty } from 'lodash'
import { getErrorMessage } from './methods/get-error-message'

/**
 * @author Jannik Maag (fuzzypawzz)
 * @description Abstract Presenter base that all presenters extend from.
 */
@injectable()
export abstract class PresenterBase<
  TView,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TEvent extends SubscriberNotification | never,
  TViewModel extends object
> {
  /**
   * @property
   * @description
   * A reference to the UI framework component instance.
   * The presenter can use it call methods and access state in the component.
   */
  private _view!: FrameworkSpecificView<TView>

  protected get view(): Readonly<typeof this._view> {
    return this._view
  }

  private set view(view: typeof this.view | null) {
    this._view = view as typeof this.view
  }

  private exposedViewModelReplica = {} as TViewModel

  protected abstract data: Partial<TViewModel>
  protected abstract onViewCreated?(): void
  protected abstract onViewDestroyed?(): void

  /**
   * @property
   * @description
   * A collection of disposers that should be called to unsubscribe
   * to observables.
   */
  private subscriptionDisposers = [] as Array<() => void>

  /**
   * @method updateViewModel
   * @description
   * Subscribes to changes in observable state and automatically updates the view model.
   * Call this method from the presenter constructor.
   *
   * @param fn a function that returns an object of observable state.
   */
  protected updateViewModel(fn: () => TViewModel): void {
    if (this.isViewModelAvailable) {
      throw new Error(this.presenterErrors.VIEWMODEL_ALREADY_ATTACHED)
    }

    // Every presenter doesn't need to wrap 'data' in an observable
    this.data = observable(this.data)

    this.autorun(() => {
      this.updateViewModelReplica({
        ...fn(),
      })
    })
  }

  /**
   * @method loadViewModel
   * @description Loads the view model. Do not mutate the view model from the view itself.
   * @returns a clean view model with it's initial state.
   */
  public loadViewModel(): Readonly<typeof this.exposedViewModelReplica> {
    if (!this.isViewModelAvailable) {
      throw new Error(this.presenterErrors.VIEWMODEL_NOT_REGISTRERED)
    }

    return this.exposedViewModelReplica
  }

  /**
   * @method attachViewControls
   * @param view A reference to the view.
   * @description Attaches the view and calls the init method.
   */
  public attachViewControls(view: typeof this.view): this {
    if (this.isDifferentView(view)) {
      throw new Error(this.presenterErrors.VIEW_ALREADY_ATTACHED)
    }

    this.view = view
    this.onViewCreated?.()

    return this
  }

  /**
   * @method detachViewControls
   * @description
   * Detaches/removes the reference to the view, resets the view model, cleans up the reactive listeners
   * and calls the reset method.
   */
  public detachViewControls(): this {
    this.view = null
    this.onViewDestroyed?.()
    this.cleanUpReactiveSubscribers()

    return this
  }

  private updateViewModelReplica(
    viewModel: typeof this.exposedViewModelReplica
  ): void {
    const internalViewModel = cloneDeep(viewModel)
    const exposedViewModel = this.exposedViewModelReplica

    let key: keyof typeof internalViewModel

    for (key in internalViewModel) {
      exposedViewModel[key] = internalViewModel[key]
    }
  }

  /**
   * @method autorun
   * @param fn mobx reactive view
   * @description
   * Adds a callback to the autorun function and automatically
   * keeps track of the disposer.
   */
  protected autorun(fn: (...args: unknown[]) => unknown): void {
    this.subscriptionDisposers.push(autorun(fn))
  }

  /**
   * @method cleanUpReactiveSubscribers
   * @description
   * Unsubscribes to all observables made through the presenter.
   * This is done to ensure that the garbage collection works to
   * prevent memory leaks.
   */
  private cleanUpReactiveSubscribers(): void {
    this.subscriptionDisposers.forEach((dispose) => dispose())
  }

  private isDifferentView(view: typeof this.view): boolean {
    if (!this.view) return false

    return this.view._uid !== view._uid
  }

  private get componentName(): string | undefined {
    // Vue framework specific
    return (this.view as any)?.$options?.name
  }

  private get isViewModelAvailable(): boolean {
    return !isEmpty(this.exposedViewModelReplica)
  }

  private get presenterErrors(): ReturnType<typeof getErrorMessage> {
    return getErrorMessage(this.componentName)
  }
}
