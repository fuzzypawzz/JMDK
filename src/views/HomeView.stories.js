import HomeView from './HomeView.vue'
import { contentModel } from './HomeViewContentModel'

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

export const Primary = Template.bind({})
Primary.args = {
  content: contentModel,
}
