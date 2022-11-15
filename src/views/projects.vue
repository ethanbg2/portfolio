<template>
  <div class="projects-container">
    <app-header></app-header>
    <tag-pane></tag-pane>
    <app-footer></app-footer>
    <project-gallary
      rootClassName="project-gallary-root-class-name1"
    ></project-gallary>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import TagPane from '../components/tag-pane'
import AppFooter from '../components/footer'
import ProjectGallary from '../components/project-gallary'

export default {
  name: 'Projects',
  components: {
    AppHeader,
    TagPane,
    AppFooter,
    ProjectGallary
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
