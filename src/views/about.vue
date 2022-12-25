<template>
    <div class="about-container">
      <app-header></app-header>
      <app-bio rootClassName="bio-root-class-name"></app-bio>
      <app-footer></app-footer>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/header'
  import AppBio from '../components/bio'
  import AppFooter from '../components/footer'
  
  export default {
    name: 'About',
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
  