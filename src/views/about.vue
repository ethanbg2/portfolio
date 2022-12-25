<template>
    <div class="about-container">
      <app-header></app-header>
      <app-bio :image_src="require(`@/assets/${resume.basics.profile_pic}`)" :text="resume.basics.bio" ></app-bio>
      <app-footer></app-footer>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/header'
  import AppBio from '../components/bio'
  import AppFooter from '../components/footer'
  const resume = require(process.env.VUE_APP_RESUME_FILE)
  
  export default {
    name: 'About',
    data () {
      return {resume: resume}
    },
    props: {},
    components: {
      AppHeader,
      AppBio,
      AppFooter,
    },
  }
  </script>
  
  <style scoped>
  .about-container {
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
  