import { PresenterBase } from '..'
import { ERROR } from './presenter-mixin-error'
import type { ComponentInstance } from './presenter-mixin.types'

/**
 * @author Jannik Maag (fuzzypawzz)
 * @description presenter-mixin
 */
export default {
  created(this: ComponentInstance) {
    if (!this.presenter) throw new Error(ERROR.MISSING_PRESENTER)

    if (!(this.presenter instanceof PresenterBase)) {
      throw new Error(ERROR.PRESENTER_SHOULD_EXTEND_FROM_BASE)
    }

    if (!this.viewModel) throw new Error(ERROR.MISSING_VIEW_MODEL)
  },

  mounted(this: ComponentInstance) {
    this.presenter.attachView(this)

    this.presenter.viewModel.subscribe((vm) => {
      this.viewModel = vm
    })
  },

  beforeUnmount(this: ComponentInstance) {
    this.presenter.detachView()
  },
}
