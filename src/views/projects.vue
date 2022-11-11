<template>
  <div class="projects-container">
    <app-header></app-header>
    <tag-pane></tag-pane>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import TagPane from '../components/tag-pane'

export default {
  name: 'Home',
  components: {
    AppHeader,
    TagPane
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
.projects-container {
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
