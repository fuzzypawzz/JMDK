import { beforeAll, it, vi, expect, afterEach } from 'vitest'
import { TESTING_ID } from '@/JMDK.UI/views/home-view/home-view.constants'
import { testHarness } from '@/JMDK.UI/views/home-view/home-view.test-harness'

beforeAll(() => {
  vi.stubGlobal('open', vi.fn())
})

afterEach(() => {
  vi.resetAllMocks()
})

it.each([
  [TESTING_ID.GITHUB_BUTTON, 'https://github.com/fuzzypawzz'],
  [TESTING_ID.LINKEDIN_BUTTON, 'https://dk.linkedin.com/in/jannik-maag'],
  [TESTING_ID.STORYBOOK_BUTTON, 'https://jmdkstorybook.netlify.app'],
])(
  'opens a new browser tab with the expected url, when clicking the button (%s)',
  async (buttonTestId, url) => {
    const wrapper = testHarness.mountComponent()

    await testHarness.clickOnButton(wrapper, buttonTestId)

    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith(url, '_blank')
  },
)
