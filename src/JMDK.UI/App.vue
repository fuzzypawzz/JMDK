<template>
  <div class="app__wrapper">
    <header class="app__header no-select">JMDK</header>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  components: { RouterView },
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
