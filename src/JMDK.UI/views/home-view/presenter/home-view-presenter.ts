import { injectable } from 'inversify'
import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { openInNewTab } from '@/JMDK.UI/helpers/browser/open-in-new-tab'
import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter'
import type { ViewModel } from './view-model'
import { computed, reactive } from 'vue'

type View = {}
type PresenterEvent = never

@injectable()
export class HomeViewPresenter extends PresenterBase<View, PresenterEvent> {
  private data = reactive({
    content: contentModel,
  })

  public viewModel = computed<Readonly<ViewModel>>(() => {
    return {
      content: this.data.content,
      textTransitionTargetElementId: 'passion',
    }
  })

  public openInNewTab = openInNewTab

  protected onViewCreated = undefined
  protected onViewDestroyed = undefined
}
