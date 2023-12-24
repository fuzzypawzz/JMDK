<template>
  <button class="j-button" :class="variantModifier">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { Dictionary } from '@/JMDK.UI/types'
import { BUTTON_VARIANT } from './j-button.constants'

const modifiers: Dictionary<string> = {
  [BUTTON_VARIANT.PRIMARY]: 'j-button--primary',
  [BUTTON_VARIANT.SECONDARY]: 'j-button--secondary',
}

const props = defineProps({
  variant: {
    type: String,
    default: BUTTON_VARIANT.PRIMARY,
    validator: (value: BUTTON_VARIANT) =>
      Object.keys(BUTTON_VARIANT).includes(value),
  },
})

const variantModifier = modifiers[props.variant]
</script>

<style lang="scss" src="./j-button.scss" />
