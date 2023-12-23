import type { ComputedRef } from 'vue'

/**
 * @author Jannik Maag (fuzzypawzz)
 */
export abstract class PresenterBase<TView extends { props: object }> {
  private _view!: TView

  protected get view(): Readonly<TView> {
    return this._view
  }

  protected get props(): TView['props'] {
    return this.view.props
  }

  public abstract viewModel: ComputedRef

  public attachView(view: TView): this {
    this._view = view

    return this
  }
}
