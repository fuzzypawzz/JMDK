<template>
  <div class="app__wrapper">
    <header class="app__header no-select">
      <span>{{ contentModel.headerText }}</span>
      <!-- TODO: Place switch on the right side of the nav -->
      <ThemeSwitch style="margin-left: 8px" />
    </header>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { contentModel } from './AppContentModel'
import ThemeSwitch from './components/theme-switch/theme-switch.vue'

export default {
  components: { RouterView, ThemeSwitch },

  data() {
    return {
      contentModel,
    }
  },

  methods: {
    toggleTheme(): void {
      document.documentElement.setAttribute('data-theme', 'dark')
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  &__wrapper {
    padding: 24px 32px;
    color: var(--color-dark);
  }

  &__header {
    font-family: 'Inria Sans';
    font-weight: 700;
    font-size: 24px;
    position: fixed;

    @include media('>tablet') {
      font-size: 28px;
    }
  }
}
</style>
