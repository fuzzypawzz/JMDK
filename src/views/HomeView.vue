<template>
  <main class="home-view">
    <h2 class="home-view__heading">
      Jannik Maag<span class="home-view__heading-dot">.</span>
    </h2>
    <p class="home-view__about-me">
      Software developer at Telia Company.<br />
      Passionate about Front-End architecture.<br />
      Freelancer.<br />
      A human being.
    </p>
    <CButton>Github</CButton>
    <CButton>LinkedIn</CButton>
    <CButton>Storybook</CButton>
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

<style lang="scss" scoped>
.home-view {
  margin: auto;
  width: 500px;

  &__heading {
    font-weight: 700;
    font-size: 46px;
    text-transform: uppercase;
    margin-bottom: 20px;

    &-dot {
      font-size: 64px;
      color: #f87060;
    }
  }

  &__about-me {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
</style>
