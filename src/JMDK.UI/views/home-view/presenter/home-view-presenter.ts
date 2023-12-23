import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { openInNewTab } from '@/JMDK.UI/infrastructure/helpers/browser/open-in-new-tab'
import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter'
import type { ViewModel } from './view-model'
import { reactive } from 'vue'
import { readonlyComputed } from '@/JMDK.Core/helpers/readonly-computed'
import { useWindowHeightVariable } from '@/JMDK.UI/infrastructure/helpers/browser/window-height'

type View = {
  props: {}
}

export class HomeViewPresenter extends PresenterBase<View> {
  constructor() {
    super()
    const removeEventListeners = useWindowHeightVariable()
    this.disposers.push(removeEventListeners)
  }

  private disposers: Array<() => void> = []

  private state = reactive({
    content: contentModel,
  })

  public viewModel = readonlyComputed<ViewModel>(() => {
    return {
      content: this.state.content,
    }
  })

  public destroy() {
    this.disposers.forEach((dispose) => dispose())
  }

  public openInNewTab = openInNewTab
}
