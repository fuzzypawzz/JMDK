import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { openInNewTab } from '@/JMDK.UI/infrastructure/helpers/browser/open-in-new-tab'
import { computed } from 'vue'
import { useWindowHeightCssVariable } from '@/JMDK.UI/infrastructure/helpers/browser/window-height'
import { presenterFactory } from 'model-vue-presenter'

export const useHomeViewPresenter = presenterFactory(() => {
  const disposers: Array<() => void> = []

  return {
    viewModel: computed(() => ({
      content: contentModel,
    })),

    openInNewTab,

    onCreated() {
      const removeEventListeners = useWindowHeightCssVariable()
      disposers.push(removeEventListeners)
    },

    onDestroy() {
      disposers.forEach((dispose) => dispose())
    },
  }
})
