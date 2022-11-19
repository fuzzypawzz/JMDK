<template>
  <button @click="onClick()"><slot /></button>
</template>

<script lang="ts">
export default {
  methods: {
    onClick(): void {
      console.log('Clicked')
    },
  },
}
</script>
