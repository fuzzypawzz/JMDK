import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter'
import { reactive } from 'vue'
import { readonlyComputed } from '@/JMDK.Core/helpers/readonly-computed'
import { useWindowHeightCssVariable } from '@/JMDK.UI/infrastructure/helpers/browser/window-height'
import { openInNewTab } from '@/JMDK.UI/infrastructure/helpers/browser/open-in-new-tab'

type View = {
  props: Record<string, never>
}

export class HomeViewPresenter extends PresenterBase<View> {
  constructor() {
    super()
    const removeEventListeners = useWindowHeightCssVariable()
    this.disposers.push(removeEventListeners)
  }

  public viewModel = readonlyComputed(() => {
    return {
      content: this.state.content,
      textTransitionTargetElementId: 'passion',
    }
  })

  public openInNewTab = openInNewTab

  public destroy() {
    this.disposers.forEach((dispose) => dispose())
  }

  private disposers: Array<() => void> = []

  private state = reactive({
    content: contentModel,
  })
}
