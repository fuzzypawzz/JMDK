<template>
  <span class="c-text">
    <slot />
  </span>
</template>

<script lang="ts">
import { UI_COLOR, UI_SIZE } from '@/constants/index'
import type { IDictionary } from '@/types/index'

const sizeDict: IDictionary<string> = {
  [UI_SIZE.SMALL]: 'small',
  [UI_SIZE.SMALL]: 'medium',
  [UI_SIZE.SMALL]: 'large',
}

const colorDict: IDictionary<string> = {
  [UI_COLOR.PRIMARY]: 'primary',
  [UI_COLOR.SECONDARY]: 'secondary',
}

export default {
  props: {
    size: {
      type: String,
      default: UI_SIZE.MEDIUM,
      validator: (value: string) => Object.keys(UI_SIZE).includes(value),
    },

    color: {
      type: String,
      default: UI_COLOR.PRIMARY,
      validator: (value: string) => Object.keys(UI_COLOR).includes(value),
    },
  },

  computed: {
    variants() {
      return [
        `c-text--${sizeDict[this.size]}`,
        `c-text--${colorDict[this.color]}`,
      ]
    },
  },
}
</script>
