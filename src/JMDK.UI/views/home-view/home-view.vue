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
        @click="presenter.openInNewTab(button.externalLink)"
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
import { container } from '@/JMDK.Core/ioc'
import { HomeViewPresenter } from './presenter/home-view-presenter'

export default {
  components: {
    JButton,
  },

  data() {
    const presenter = container.get<HomeViewPresenter>(HomeViewPresenter)
    const viewModel = presenter.loadViewModel()

    return {
      presenter,
      viewModel,
      content: viewModel.content,
    }
  },

  mounted() {
    this.presenter.attachViewControls({})
  },
}
</script>

<style lang="scss" src="./home-view.scss" scoped />
