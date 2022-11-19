<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  components: { RouterView },
}
</script>

<template>
  <header
    style="
      padding: 24px 32px;
      font-family: 'Inria Sans';
      font-weight: 700;
      font-size: 28px;
      position: fixed;
    "
  >
    JMDK
  </header>

  <RouterView />
</template>
