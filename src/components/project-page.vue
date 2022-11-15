<template>
  <div class="project-page-container">
    <app-header></app-header>
    <h1 v-if="!this_project"> Project Not Found </h1>
    <h1 v-else > {{this_project}} </h1>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './header'
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
  justify-content: flex-start;
  background-color: var(--dl-color-darkmode-base);
}
</style>
