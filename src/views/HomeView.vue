<template>
  <main class="home-view">
    <div class="home-view__content">
      <h2 class="home-view__heading">
        Jannik Maag<span class="home-view__heading-dot">.</span>
      </h2>
      <p class="home-view__about-me">
        Software developer at Telia Company.<br />
        Passionate about Front-End architecture.<br />
        Freelancer.<br />
        A human being.
      </p>
      <CButton class="home-view__button">Github</CButton>
      <CButton class="home-view__button">LinkedIn</CButton>
      <CButton class="home-view__button">Storybook</CButton>
    </div>
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
  height: 100vh;

  &__content {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &__heading {
    font-weight: 700;
    font-size: 54px;
    text-transform: uppercase;
    margin-bottom: 20px;

    &-dot {
      font-size: 68px;
      color: #f87060;
    }
  }

  &__about-me {
    font-size: 22px;
    margin-bottom: 20px;
    line-height: normal;
  }

  &__button {
    margin-right: 8px;
  }
}
</style>
