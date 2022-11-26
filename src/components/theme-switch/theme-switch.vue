<template>
  <label class="theme-switch">
    <input
      class="theme-switch__checkbox"
      :aria-label="ariaLabel"
      role="switch"
      type="checkbox"
      :aria-checked="darkModeOn"
      @change="toggleDarkMode()"
    />
    <span class="theme-switch__slider"></span>
    <span>{{ darkModeOn }}</span>
  </label>
</template>

<script lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const ariaLabel = 'dark mode toggle'

const darkModeOn = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDarkMode = useToggle(darkModeOn)

export default {
  data() {
    return {
      ariaLabel,
      darkModeOn,
      documentElement: document.documentElement,
    }
  },

  methods: {
    toggleDarkMode,
  },
}
</script>

<style lang="scss" src="./theme-switch.scss" scoped />
