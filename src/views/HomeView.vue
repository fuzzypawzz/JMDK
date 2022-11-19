<template>
  <main>
    <h3>Jannik Maag</h3>
    <p>Software developer at Telia Company.</p>
    <p>Passionate about Front-End architecture.</p>
    <p>Freelancer.</p>
    <p>A human being.</p>
    <CButton>Hello world</CButton>
  </main>
</template>

<script lang="ts">
import CButton from '@/components/CButton/CButton.vue'

export default {
  components: {
    CButton,
  },
}
</script>
