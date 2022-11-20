<template>
  <button class="c-button" :class="buttonVariant" @click="onClick()">
    <slot />
  </button>
</template>

<script lang="ts">
import type { IDictionary } from '@/types'

export enum BUTTON_VARIANT {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

const variantDict: IDictionary<string> = {
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
      return variantDict[this.variant]
    },
  },

  methods: {
    onClick(): void {
      console.log('Clicked')
    },
  },
}
</script>

<style lang="scss" src="./c-button.scss" />
