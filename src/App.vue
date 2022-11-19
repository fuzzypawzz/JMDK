<script lang="ts">
import { RouterView } from 'vue-router'
import SiteLogo from './components/Molecules/SiteLogo/SiteLogo.vue'

export default {
  components: { SiteLogo, RouterView },
}
</script>

<template>
  <header><SiteLogo /></header>

  <RouterView />
</template>
