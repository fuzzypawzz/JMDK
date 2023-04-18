import ButtonComponent, { BUTTON_VARIANT } from './button-component.vue'

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  argTypes: {},
}

const Template = (args) => ({
  components: { ButtonComponent },
  setup() {
    return { args }
  },
  template: '<ButtonComponent v-bind="args">Click me!</ButtonComponent>',
})

export const Primary = Template.bind({})
Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
}
