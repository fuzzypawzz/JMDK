import HomeView from '@/JMDK.UI/views/home-view/home-view.vue'
import { contentModel } from '@/JMDK.UI/views/home-view/content/default-content'

export default {
  title: 'Pages/HomeView',
  component: HomeView,
  argTypes: {},
}

const Template = (args) => ({
  components: { HomeView },
  setup() {
    return { args }
  },
  template: '<HomeView v-bind="args" />',
})

const mockContentModel = {
  ...contentModel,
  buttonOptions: contentModel.buttonOptions.map((buttonOption) => ({
    ...buttonOption,
    // Remove links to prevent navigating when button is click
    externalLink: null,
  })),
}

export const Primary = Template.bind({})
Primary.args = {
  content: mockContentModel,
}
