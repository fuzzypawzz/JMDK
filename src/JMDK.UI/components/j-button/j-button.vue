<template>
  <button class="j-button" :class="variantModifier">
    <slot />
  </button>
</template>

<script lang="ts">
import type { Dictionary } from '@/JMDK.UI/types'
import { BUTTON_VARIANT } from './j-button.constants'

const modifiers: Dictionary<string> = {
  [BUTTON_VARIANT.PRIMARY]: 'j-button--primary',
  [BUTTON_VARIANT.SECONDARY]: 'j-button--secondary',
}

const isValidButtonVariant = (value: BUTTON_VARIANT): boolean =>
  Object.keys(BUTTON_VARIANT).includes(value)

export default {
  props: {
    variant: {
      type: String,
      default: BUTTON_VARIANT.PRIMARY,
      validator: isValidButtonVariant,
    },
  },

  computed: {
    variantModifier(): string {
      return modifiers[this.variant]
    },
  },
}
</script>

<style lang="scss" src="./j-button.scss" />
