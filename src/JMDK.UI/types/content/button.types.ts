import type { BUTTON_VARIANT } from '@/JMDK.UI/components/j-button/constants/button-variant'

export type Button = {
  text: string
  externalLink?: string
  title?: string
  variant?: BUTTON_VARIANT
}
