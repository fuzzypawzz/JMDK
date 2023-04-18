import type { BUTTON_VARIANT } from '@/JMDK.UI/components/button-component/button-component.vue'

export type Button = {
  text: string
  externalLink?: string
  title?: string
  variant?: BUTTON_VARIANT
}
