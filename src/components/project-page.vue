<template>
  <div class="project-page-container">
    <app-header></app-header>
    <div class="project-page-container1">
      <h1 class="project-page-text"> {{this_project}} </h1>
      <list-item rootClassName="list-item-root-class-name2"></list-item>
      <list-item rootClassName="list-item-root-class-name3"></list-item>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './header'
import ListItem from './ListItem'
import AppFooter from './footer'
import resume from '@/assets/resume.json'

export default {
  name: 'ProjectPage',
  data () {
    return {resume: resume, this_project: undefined}
  },
  props: {},
  components: {
    AppHeader,
    ListItem,
    AppFooter,
  },
  created () {
    const name = this.$route.params.id
    for (const [_, project] of Object.entries(resume.projects)) {
      if (name == project.name) {
        this.this_project = name
        break
      }
    }
  }
  
}
</script>

<style scoped>
.project-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-darkmode-base);
}
.project-page-container1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-threeunits);
  align-items: flex-start;
  margin-left: 0%;
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.project-page-text {
  color: var(--dl-color-gray-white);
  font-size: 2rem;
  align-self: flex-start;
}
@media(max-width: 1600px) {
  .project-page-container1 {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .project-page-container1 {
    align-self: center;
  }
}
</style>
