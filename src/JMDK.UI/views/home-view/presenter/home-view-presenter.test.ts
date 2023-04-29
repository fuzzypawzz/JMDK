import { container } from '@/JMDK.Core/ioc'
import { HomeViewPresenter } from './home-view-presenter'
import { expect, it } from '@jest/globals'
import { contentModel } from '../content/default-content'

it('has the expected content in the view model', () => {
  const homeViewPresenter = container.get(HomeViewPresenter)

  homeViewPresenter.attachView({})

  const viewModel = homeViewPresenter.viewModel.snapshot()

  expect(viewModel.content).toMatchObject(contentModel)
})
