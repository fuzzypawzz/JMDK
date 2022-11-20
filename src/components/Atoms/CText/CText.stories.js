import CText from './CText.vue'

export default {
  title: 'Atoms/CText',
  component: CText,
  argTypes: {},
}

const Template = (args) => ({
  components: { CText },
  setup() {
    return { args }
  },
  template: '<CText v-bind="args">Hello world</CText>',
})

export const Primary = Template.bind({})
Primary.args = {}
