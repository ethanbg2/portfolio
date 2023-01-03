<template>
    <div class="about-container">
      <app-header></app-header>
      <h1 class="about-text">
        <span>About Me</span>
        <br />
      </h1>
      <app-bio :image_src="require(`@/assets/${resume.basics.profile_pic}`)" :text="resume.basics.bio" ></app-bio>
      <h2 class="about-text3">
        <span>Some Highlights</span>
        <br />
      </h2>
      <app-highlights heading="Education" :highlights="resume.education"></app-highlights>
      <app-highlights heading="Awards" :highlights="resume.awards"></app-highlights>
      <app-highlights heading="Publications" :highlights="resume.publications"></app-highlights>
      <app-footer></app-footer>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/header'
  import AppBio from '../components/bio'
  import AppFooter from '../components/footer'
  import AppHighlights from '../components/highlights'
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
      AppHighlights
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
  .about-text {
    font-size: 3em;
    color: var(--dl-color-gray-white);
    width: 100%;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
    text-align: center;
    margin-top: var(--dl-space-space-threeunits);
  }
  .about-text3 {
    color: var(--dl-color-gray-white);
    width: 100%;
    font-size: 2em;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
    text-align: center;
    margin-bottom: var(--dl-space-space-twounits);
  }

  </style>
  