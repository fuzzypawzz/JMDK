import { PresenterBase } from '@/JMDK.UI/infrastructure/presenter/presenter-base'
import { injectable } from 'inversify'
import {
  contentModel,
  type HomeViewContentModel,
} from '@/JMDK.UI/views/home-view/content/default-content'

type ViewModel = {
  content: HomeViewContentModel
}

@injectable()
export class HomeViewPresenter extends PresenterBase<{}, never, ViewModel> {
  constructor() {
    super()

    this.updateViewModel(() => ({
      content: this.data.content,
    }))
  }

  protected data = {
    content: contentModel,
  }

  public openInNewTab(url?: string): void {
    if (url) window.open(url, '_blank')
  }

  protected onViewCreated = undefined
  protected onViewDestroyed = undefined
}
