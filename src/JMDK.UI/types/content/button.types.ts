import type { BUTTON_VARIANT } from '@/JMDK.UI/components/j-button/j-button.vue'

export type Button = {
  text: string
  externalLink?: string
  title?: string
  variant?: BUTTON_VARIANT
}
