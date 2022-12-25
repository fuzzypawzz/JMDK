<template>
  <button class="c-button" :class="buttonVariant">
    <slot />
  </button>
</template>

<script lang="ts">
import type { IDictionary } from '@/types'

export enum BUTTON_VARIANT {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

const classNameDict: IDictionary<string> = {
  [BUTTON_VARIANT.PRIMARY]: 'c-button--primary',
  [BUTTON_VARIANT.SECONDARY]: 'c-button--secondary',
}

export default {
  props: {
    variant: {
      type: String,
      default: BUTTON_VARIANT.PRIMARY,
      validator: (value: string) => Object.keys(BUTTON_VARIANT).includes(value),
    },
  },

  computed: {
    buttonVariant() {
      return classNameDict[this.variant]
    },
  },
}
</script>

<style lang="scss" src="./c-button.scss" />
