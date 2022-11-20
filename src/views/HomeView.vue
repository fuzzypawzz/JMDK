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
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: space(5);

    @include media('>tablet') {
      font-size: 58px;
    }

    &-dot {
      font-size: 60px;
      color: #f87060;

      @include media('>tablet') {
        font-size: 84px;
      }
    }
  }

  &__about-me {
    font-size: 18px;
    margin-bottom: space(4);
    line-height: normal;

    @include media('>tablet') {
      font-size: 22px;
      margin-bottom: space(6);
    }
  }

  &__hashtag {
    color: rgb(83, 83, 83);
    margin-right: 2px;

    &-list {
      color: rgb(83, 83, 83);
      margin-top: space(4);
      line-height: normal;

      @include media('>tablet') {
        margin-top: space(6);
      }
    }
  }

  &__button {
    margin: space(0, 2, 2, 0);
  }
}
</style>
