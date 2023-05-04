import { onBeforeUnmount, onMounted, getCurrentInstance } from 'vue'
import type { PresenterBase } from '../presenter-base'

export function usePresenterSetup<TPresenter extends PresenterBase<any, any>>(
  presenter: TPresenter
) {
  onMounted(() => {
    presenter.attachView(getCurrentInstance())
  })

  onBeforeUnmount(() => {
    presenter.detachView()
  })
}
