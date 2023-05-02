import { container } from '@/JMDK.Core/ioc'
import { HomeViewPresenter } from './home-view-presenter'
import { expect, it, beforeAll, afterAll, describe } from '@jest/globals'
import { contentModel } from '../content/default-content'

beforeAll(() => {
  container.snapshot()
})

afterAll(() => {
  container.restore()
})

describe('testing the viewModel', () => {
  const homeViewPresenter = container.get(HomeViewPresenter)
  const viewModel = homeViewPresenter.viewModel.value

  homeViewPresenter.attachView({} as any)

  it('has the expected content in the view model', () => {
    expect(viewModel.content).toMatchObject(contentModel)
  })

  it('has the span element with the correct id attribute in the description', () => {
    expect(
      viewModel.content.description.includes(
        `<span id="${viewModel.textTransitionTargetElementId}">`
      )
    ).toBe(true)
  })
})
