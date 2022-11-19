<template>
  <div class="site-logo">
    <ColoredBox variant="PRIMARY" class="site-logo-item">JANNIK</ColoredBox>
    <ColoredBox variant="PRIMARY" class="site-logo-item">MAAG</ColoredBox>
    <ColoredBox variant="SECONDARY" class="site-logo-item">.</ColoredBox>
    <ColoredBox variant="SECONDARY" class="site-logo-item">DK</ColoredBox>
  </div>
</template>

<script lang="ts">
import ColoredBox from '@/components/ColoredBox/ColoredBox.vue'

export default {
  components: {
    ColoredBox,
  },
}
</script>

<style src="./site-logo.scss" />
