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

<style lang="scss" src="./home-view.scss" scoped />
