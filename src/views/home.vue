<template>
  <div class="home-container">
    <app-header></app-header>
    <app-hero></app-hero>
    <app-button
      button="See More"
      router="projects"
      rootClassName="button-root-class-name2"
    ></app-button>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppHero from '../components/hero'
import AppButton from '../components/button'

export default {
  name: 'Projects',
  components: {
    AppHeader,
    AppHero,
    AppButton
  },
  metaInfo: {
    title: 'Portfolio',
    meta: [
      {
        property: 'og:title',
        content: 'Portfolio',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-darkmode-base);
}
</style>
