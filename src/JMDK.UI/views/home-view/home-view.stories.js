import HomeView from '@/JMDK.UI/views/home-view/home-view.vue'

export default {
  title: 'pages/home-view',
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
Primary.args = {}
