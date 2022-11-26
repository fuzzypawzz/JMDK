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
  </label>
</template>

<script lang="ts">
enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

const themeAttributeName = 'data-theme'
const ariaLabel = 'dark mode toggle'

export default {
  data() {
    return {
      ariaLabel,
      darkModeOn: false,
      documentElement: document.documentElement,
    }
  },

  watch: {
    darkModeOn: {
      immediate: true,
      handler(darkModeOn: boolean) {
        this.setThemeAttribute(darkModeOn ? THEME.DARK : THEME.LIGHT)
      },
    },
  },

  methods: {
    toggleDarkMode(): void {
      this.darkModeOn = !this.darkModeOn
    },

    setThemeAttribute(theme: THEME): void {
      this.documentElement.setAttribute(themeAttributeName, theme)
    },
  },
}
</script>

<style lang="scss" src="./theme-switch.scss" scoped />
