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
  TEvent extends object | never,
  TViewModel extends object
> {
  private _view!: FrameworkSpecificView<TView>

  protected get view(): Readonly<typeof this._view> {
    return this._view
  }

  private set view(view: typeof this.view | null) {
    this._view = view as typeof this.view
  }

  private exposedViewModelReplica = {} as TViewModel

  private subscriptionDisposers = [] as Array<() => void>

  protected abstract data: Partial<TViewModel>
  protected abstract onViewCreated?(): void
  protected abstract onViewDestroyed?(): void

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

  public loadViewModel(): Readonly<typeof this.exposedViewModelReplica> {
    if (!this.isViewModelAvailable) {
      throw new Error(this.presenterErrors.VIEWMODEL_NOT_REGISTRERED)
    }

    return this.exposedViewModelReplica
  }

  public attachView(view: typeof this.view): this {
    if (this.isDifferentView(view)) {
      throw new Error(this.presenterErrors.VIEW_ALREADY_ATTACHED)
    }

    this.view = view
    this.onViewCreated?.()

    return this
  }

  public detachView(): this {
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

  protected autorun(fn: (...args: unknown[]) => unknown): void {
    this.subscriptionDisposers.push(autorun(fn))
  }

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
