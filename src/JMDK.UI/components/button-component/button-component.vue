<template>
  <button class="button-component" :class="variantModifier">
    <slot />
  </button>
</template>

<script lang="ts">
import type { Dictionary } from '@/JMDK.UI/types'

export enum BUTTON_VARIANT {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

const modifiers: Dictionary<string> = {
  [BUTTON_VARIANT.PRIMARY]: 'button-component--primary',
  [BUTTON_VARIANT.SECONDARY]: 'button-component--secondary',
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

<style lang="scss" src="./styles.scss" />
