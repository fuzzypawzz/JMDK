<template>
  <div style="display: inline-flex; border-radius: 6px; padding: 6px 8px">
    <span style="font-size: 16px; font-weight: 400; margin-right: 6px"
      >Darkmode</span
    >
    <label class="theme-switch">
      <input
        class="theme-switch__checkbox"
        aria-label="Toggle dark mode on/off"
        role="switch"
        type="checkbox"
        :aria-checked="darkModeOn"
        :checked="darkModeOn"
        @change="toggleDarkMode()"
      />

      <span class="theme-switch__slider"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { useDark, useToggle } from '@vueuse/core'

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
