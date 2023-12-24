<template>
  <main class="home-view">
    <section>
      <div class="home-view__heading-wrapper">
        <h2 class="home-view__heading">
          <span>{{ viewModel.content.heading }}</span>

          <span class="home-view__heading-dot no-select">.</span>
        </h2>

        <p class="home-view__handle">{{ viewModel.content.handle }}</p>
      </div>

      <text-transition
        :values="viewModel.content.textTransitionValues"
        :element-id="viewModel.textTransitionTargetElementId"
      >
        <!-- XSS: Controlled source (static content file import) -->
        <p class="home-view__about-me" v-html="viewModel.content.description" />
      </text-transition>

      <j-button
        v-for="button in viewModel.content.buttonOptions"
        :data-test="button.testId"
        :key="button.text"
        :title="button.title"
        class="home-view__button"
        :variant="button.variant"
        @click="presenter.openInNewTab(button.externalLink)"
      >
        {{ button.text }}
      </j-button>

      <ul class="home-view__hashtag-list">
        <li
          class="home-view__hashtag-list-item"
          v-for="hashTag in viewModel.content.hashTags"
          :key="hashTag"
        >
          <span class="home-view__hash no-select">#</span>{{ hashTag }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import JButton from '@/JMDK.UI/components/j-button/j-button.vue'
import { HomeViewPresenter } from './presenter/home-view-presenter'
import { onBeforeUnmount } from 'vue'
import TextTransition from '@/JMDK.UI/components/text-transition/text-transition.vue'

const presenter = new HomeViewPresenter()
const viewModel = presenter.viewModel

onBeforeUnmount(() => presenter.destroy())

presenter.attachView({
  props: {},
})
</script>

<style lang="scss" src="./home-view.scss" scoped />
