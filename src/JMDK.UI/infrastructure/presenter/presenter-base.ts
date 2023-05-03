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
  TEvent extends object | never
> {
  private _view!: FrameworkSpecificView<TView>

  protected get view(): Readonly<FrameworkSpecificView<TView>> {
    return this._view
  }

  private set view(view: FrameworkSpecificView<TView> | null) {
    this._view = view as FrameworkSpecificView<TView>
  }

  protected onViewCreated?(): void
  protected onViewDestroyed?(): void

  public abstract viewModel: ComputedRef

  public attachView(view: FrameworkSpecificView<TView>): void {
    if (this.isDifferentView(view)) {
      throw new Error(this.presenterErrors.VIEW_ALREADY_ATTACHED)
    }

    this.view = view
    this.checkViewModel()
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

    return this.view.uid !== view.uid
  }

  private get componentName(): string | undefined {
    // Vue-3 specific property that contains a component identifier.
    // TODO: Write a test for this, so I will know if there's a breaking change to the Vue later on.
    return this.view?.type.__name
  }

  private get presenterErrors(): ReturnType<typeof getErrorMessage> {
    return getErrorMessage(this.componentName)
  }
}
