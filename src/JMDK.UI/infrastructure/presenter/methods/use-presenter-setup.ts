import { onBeforeUnmount, onMounted, type ComputedRef } from "vue";
import type { PresenterBase } from "../presenter-base";

export function usePresenterSetup<TPresenter extends PresenterBase<any, any>>(presenter: TPresenter) {
  onMounted(() => {
    presenter.attachView({})
  })

  onBeforeUnmount(() => {
    presenter.detachView()
  })
}