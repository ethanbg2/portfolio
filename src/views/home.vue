<template>
  <div class="home-container">
    <app-header></app-header>
    <app-hero 
      :image_src="require(`@/assets/${resume.basics.image}`)" 
      :bio="resume.basics.summary" :button_link="resume.basics.resume_url"> 
    </app-hero>
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
const resume = require(process.env.VUE_APP_RESUME_FILE)

export default {
  name: 'Home',
  props: {},
  data () {
    return {resume: resume}
  },
  components: {
    AppHeader,
    AppHero,
    AppTag,
    ProjectGallary,
    AppButton,
    AppFooter
  }
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

.button-container {
  margin-top: var(--dl-space-space-twounits);
}

</style>
