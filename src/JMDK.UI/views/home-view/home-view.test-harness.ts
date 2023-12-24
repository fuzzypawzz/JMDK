import { mount, VueWrapper } from '@vue/test-utils'
import HomeView from '@/JMDK.UI/views/home-view/home-view.vue'
import { TESTING_ID } from '@/JMDK.UI/views/home-view/home-view.constants'

export const testHarness = {
  mountComponent: function () {
    return mount(HomeView)
  },

  findButton: function (wrapper: VueWrapper, buttonTestId: string) {
    if (!TESTING_ID.includes(buttonTestId))
      throw `button test id ${buttonTestId} does not exist.`

    return wrapper.find(`[data-test=${buttonTestId}]`)
  },

  clickOnButton: async function (wrapper: VueWrapper, buttonTestId: string) {
    await this.findButton(wrapper, buttonTestId).trigger('click')
  },
}
