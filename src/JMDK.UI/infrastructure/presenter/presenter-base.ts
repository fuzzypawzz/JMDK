import { injectable } from 'inversify'
import { action, autorun, computed, makeObservable } from 'mobx'
import type { FrameworkSpecificView } from './presenter-base.types'
import { getErrorMessage } from './methods/get-error-message'
import { recursivelyAccessDeepProperties } from './reactivity-helpers/access-deep-properties'

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

  protected get view(): Readonly<FrameworkSpecificView<TView>> {
    return this._view
  }

  private set view(view: FrameworkSpecificView<TView> | null) {
    this._view = view as FrameworkSpecificView<TView>
  }

  private subscriptionDisposers = [] as Array<() => void>

  protected abstract data: Partial<TViewModel>
  protected abstract onViewCreated?(): void
  protected abstract onViewDestroyed?(): void
  protected abstract vm(): TViewModel

  constructor() {
    makeObservable(this)
  }

  public viewModel = {
    snapshot: () => {
      this.checkForVmProperty()

      return this.getReadOnlyViewModel()
    },

    subscribe: this.subscribeToViewModel.bind(this),
  }

  @action
  private subscribeToViewModel(
    effect: (vm: Readonly<TViewModel>) => void
  ): void {
    this.checkForVmProperty()

    this.autorun(() => {
      const vm = this.getReadOnlyViewModel()

      // Mobx only tracks accessed properties
      recursivelyAccessDeepProperties(vm)

      effect(vm)
    })
  }

  private getReadOnlyViewModel(): Readonly<TViewModel> {
    return Object.freeze(this.vm())
  }

  private checkForVmProperty(): void {
    if (!this.vm || typeof this.vm !== 'function') {
      throw new Error(this.presenterErrors.VIEW_MODEL_FUNCTION_MISSING)
    }
  }

  public attachView(view: FrameworkSpecificView<TView>): void {
    if (this.isDifferentView(view)) {
      throw new Error(this.presenterErrors.VIEW_ALREADY_ATTACHED)
    }

    this.view = view
    this.onViewCreated?.()
  }

  public detachView(): void {
    this.view = null
    this.onViewDestroyed?.()
    this.cleanUpReactiveSubscribers()
  }

  protected autorun(fn: (...args: unknown[]) => unknown): void {
    this.subscriptionDisposers.push(autorun(fn))
  }

  private cleanUpReactiveSubscribers(): void {
    this.subscriptionDisposers.forEach((dispose) => dispose())
  }

  private isDifferentView(view: FrameworkSpecificView<TView>): boolean {
    if (!this.view) return false

    return this.view._uid !== view._uid
  }

  private get componentName(): string | undefined {
    // Vue framework specific
    return (this.view as any)?.$options?.name
  }

  private get presenterErrors(): ReturnType<typeof getErrorMessage> {
    return getErrorMessage(this.componentName)
  }
}
