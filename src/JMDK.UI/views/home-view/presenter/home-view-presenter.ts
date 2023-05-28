import { injectable } from 'inversify'
import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { openInNewTab } from '@/JMDK.UI/infrastructure/helpers/browser/open-in-new-tab'
import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter'
import type { ViewModel } from './view-model'
import { reactive } from 'vue'
import { readonlyComputed } from '@/JMDK.Core/helpers/readonly-computed'

type View = {
  props: {}
}

@injectable()
export class HomeViewPresenter extends PresenterBase<View> {
  private state = reactive({
    content: contentModel,
  })

  public viewModel = readonlyComputed<ViewModel>(() => {
    return {
      ...this.state.content,
    }
  })

  public openInNewTab = openInNewTab
}
