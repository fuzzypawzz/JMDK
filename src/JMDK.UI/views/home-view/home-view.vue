<template>
  <main class="home-view">
    <section>
      <div class="home-view__heading-wrapper">
        <h2 class="home-view__heading">
          <span>{{ content?.heading }}</span>

          <span class="home-view__heading-dot no-select">.</span>
        </h2>

        <p class="home-view__handle">{{ content?.handle }}</p>
      </div>

      <!-- XSS risk analysis: Controlled source (content file import in router) -->
      <p class="home-view__about-me" v-html="content?.description" />

      <JButton
        v-for="button in content?.buttonOptions"
        :key="button.text"
        :title="button.title"
        class="home-view__button"
        :variant="button.variant"
        @click="openNewTab(button.externalLink)"
      >
        {{ button.text }}
      </JButton>

      <ul class="home-view__hashtag-list">
        <li
          class="home-view__hashtag-list-item"
          v-for="text in content?.hashTags"
          :key="text"
        >
          <span class="home-view__hash no-select">#</span>{{ text }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import JButton from '@/JMDK.UI/components/j-button/j-button.vue'
import type { HomeViewContentModel } from './content/default-content'

export default {
  components: {
    JButton,
  },

  props: {
    content: {
      type: Object as () => HomeViewContentModel,
      default: undefined,
    },
  },

  methods: {
    openNewTab(url?: string) {
      if (url) window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" src="./home-view.scss" scoped />
