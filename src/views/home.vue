<template>
  <div class="home-container">
    <app-header></app-header>
    <app-hero></app-hero>
    <div class="tag-pane-container">
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="c++" rootClassName="tag-root-class-name15"></app-tag>
      <app-tag button="vue.js" rootClassName="tag-root-class-name17"></app-tag>
      <app-tag button="MUI" rootClassName="tag-root-class-name18"></app-tag>
    </div>
    <project-gallary
      rootClassName="project-gallary-root-class-name1"
    ></project-gallary>
    <app-button
      button="See More"
      router="projects"
      rootClassName="button-root-class-name2"
    ></app-button>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppHero from '../components/hero'
import AppTag from '../components/tag'
import ProjectGallary from '../components/project-gallary'
import AppButton from '../components/button'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  props: {},
  components: {
    AppHeader,
    AppHero,
    AppTag,
    ProjectGallary,
    AppButton,
    AppFooter
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

.tag-pane-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  justify-content: center;
}

</style>
