import { injectable } from 'inversify'
import type { FrameworkSpecificView } from './presenter-base.types'
import { getErrorMessage } from './methods/get-error-message'
import { isReadonly, type ComputedRef } from 'vue'

/**
 * @author Jannik Maag (fuzzypawzz)
 * @description Abstract Presenter base that all presenters extend from.
 */
@injectable()
export abstract class PresenterBase<
  TView,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TEvent extends object | never,
> {
  private _view!: FrameworkSpecificView<TView>

  protected get view(): Readonly<FrameworkSpecificView<TView>> {
    return this._view
  }

  private set view(view: FrameworkSpecificView<TView> | null) {
    this._view = view as FrameworkSpecificView<TView>
  }

  protected abstract onViewCreated?(): void
  protected abstract onViewDestroyed?(): void
  
  public abstract viewModel: ComputedRef

  public attachView(view: FrameworkSpecificView<TView>): void {
    this.checkViewModel()
    
    if (this.isDifferentView(view)) {
      throw new Error(this.presenterErrors.VIEW_ALREADY_ATTACHED)
    }

    this.view = view
    this.onViewCreated?.()
  }

  public detachView(): void {
    this.view = null
    this.onViewDestroyed?.()
  }

  private checkViewModel(): void {
    if (!isReadonly(this.viewModel)) {
      throw new Error(this.presenterErrors.VIEW_MODEL_INVALID)
    }
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
