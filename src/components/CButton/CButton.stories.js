import CButton, { BUTTON_VARIANT } from './CButton.vue'

export default {
  title: 'Components/CButton',
  component: CButton,
  argTypes: {},
}

const Template = (args) => ({
  components: { CButton },
  setup() {
    return { args }
  },
  template: '<CButton v-bind="args">Subscribe</CButton>',
})

export const Primary = Template.bind({})
Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
}
