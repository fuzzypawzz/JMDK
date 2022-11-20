<template>
  <div class="app__wrapper">
    <header class="app__header no-select">{{ contentModel.headerText }}</header>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { contentModel } from './AppContentModel'

export default {
  components: { RouterView },

  data() {
    return {
      contentModel,
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  &__wrapper {
    padding: 24px 32px;
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
