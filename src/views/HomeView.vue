<template>
  <main class="home-view">
    <section>
      <h2 class="home-view__heading">
        {{ content?.heading }}
        <span class="home-view__heading-dot no-select">.</span>
      </h2>

      <p class="home-view__about-me" v-html="content?.description" />

      <CButton
        v-for="button in content?.buttonOptions"
        :key="button.text"
        :title="button.title"
        class="home-view__button"
        @click="openNewTab(button.externalLink)"
      >
        {{ button.text }}
      </CButton>

      <div class="home-view__hashtag-list">
        <p v-for="text in content?.hashTags" :key="text">
          <span class="home-view__hashtag no-select">#</span>{{ text }}
        </p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import CButton from '@/components/CButton/CButton.vue'
import type { IContentModel } from './HomeViewContentModel'

export default {
  components: {
    CButton,
  },

  props: {
    content: {
      type: Object as () => IContentModel,
      default: undefined,
    },
  },

  methods: {
    openNewTab(url?: string) {
      if (!url) return

      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.home-view {
  height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;

  &__heading {
    font-weight: 700;
    font-size: 58px;
    text-transform: uppercase;
    margin-bottom: 20px;

    &-dot {
      font-size: 84px;
      color: #f87060;
    }
  }

  &__about-me {
    font-size: 22px;
    margin-bottom: 24px;
    line-height: normal;
  }

  &__hashtag {
    color: rgb(83, 83, 83);
    margin-right: 2px;

    &-list {
      color: rgb(83, 83, 83);
      margin-top: 36px;
      line-height: normal;
    }
  }

  &__button {
    margin-right: 8px;
  }
}
</style>
