import { BUTTON_VARIANT } from './constants/button-variant'
import JButton from './j-button.vue'

export default {
  title: 'components/j-button',
  component: JButton,
  argTypes: {},
}

const Template = (args) => ({
  components: { JButton },
  setup() {
    return { args }
  },
  template: '<JButton v-bind="args">Click me!</JButton>',
})

export const Primary = Template.bind({})
Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
}
