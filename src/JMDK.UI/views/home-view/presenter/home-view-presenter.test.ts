import { container } from '@/JMDK.Core/ioc'
import { HomeViewPresenter } from './home-view-presenter'
import { expect, it, beforeAll, afterAll } from '@jest/globals'
import { contentModel } from '../content/default-content'

beforeAll(() => {
  container.snapshot()
})

afterAll(() => {
  container.restore()
})

it('has the expected content in the view model', () => {
  const homeViewPresenter = container.get(HomeViewPresenter)

  homeViewPresenter.attachView({})

  const viewModel = homeViewPresenter.viewModel.value

  expect(viewModel.content).toMatchObject(contentModel)
})


