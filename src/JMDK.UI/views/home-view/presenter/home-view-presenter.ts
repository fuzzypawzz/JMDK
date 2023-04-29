import { injectable } from 'inversify'
import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'
import { openInNewTab } from '@/JMDK.UI/helpers/browser/open-in-new-tab'
import { observable } from 'mobx'
import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter'
import type { ViewModel } from './view-model'
@injectable()
export class HomeViewPresenter extends PresenterBase<{}, never, ViewModel> {
  protected data = observable({
    content: contentModel,
  })

  protected vm(): ViewModel {
    return {
      content: this.data.content,
    }
  }

  public openInNewTab = openInNewTab

  protected onViewCreated = undefined
  protected onViewDestroyed = undefined
}
