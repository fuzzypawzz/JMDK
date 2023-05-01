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

      <!-- XSS risk analysis: Controlled source (content file import in router) -->
      <p class="home-view__about-me" v-html="viewModel.content.description" />

      <j-button
        v-for="button in viewModel.content.buttonOptions"
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
          v-for="text in viewModel.content.hashTags"
          :key="text"
        >
          <span class="home-view__hash no-select">#</span>{{ text }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import JButton from '@/JMDK.UI/components/j-button/j-button.vue'
import { container } from '@/JMDK.Core/ioc'
import { HomeViewPresenter } from './presenter/home-view-presenter'
import { usePresenterSetup } from '@/JMDK.UI/infrastructure/presenter/methods/use-presenter-setup'

const presenter = container.get(HomeViewPresenter)
const viewModel = presenter.viewModel

usePresenterSetup(presenter)
</script>

<style lang="scss" src="./home-view.scss" scoped />
