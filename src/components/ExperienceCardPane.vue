<template>
    <div class="course-card-pane-container" v-bind:class="rootClassName">
      <div class="course-card-pane-container1">
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
      </div>
    </div>
  </template>
  
  <script>
  import ExperienceCard from './ExperienceCard'
  
  export default {
    name: 'ExperienceCardPane',
    props: {
      rootClassName: String,
    },
    components: {
      ExperienceCard,
    },
  }
  </script>
  
  <style scoped>
  .course-card-pane-container {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
  }
  .course-card-pane-container1 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  </style>
  