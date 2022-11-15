<template>
  <div class="projects-container">
    <app-header></app-header>
    <h1 class="projects-text">
      <span>My Work</span>
      <br />
    </h1>
    <tag-pane rootClassName="tag-pane-root-class-name"></tag-pane>
    <h2 class="projects-text">
      <span>Projects</span>
      <br />
    </h2>
    <project-gallary
      rootClassName="project-gallary-root-class-name"
    ></project-gallary>
    <h2 class="projects-text">
      <span>Courses</span>
      <br />
    </h2>
    <app-footer></app-footer>
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
.projects-text {
  margin-top: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-threeunits);
  color: var(--dl-color-gray-white);
}
</style>
