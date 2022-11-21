<template>
    <div class="experience-card-pane-container" v-bind:class="rootClassName">
      <div class="experience-card-pane-container1">
        <ExperienceCard v-for="item in experiences" 
        :company="item.company" 
        :date="item.date" 
        :position="item.position">
        </ExperienceCard>
      </div>
    </div>
  </template>
  
  <script>
  import ExperienceCard from './ExperienceCard'
  
  export default {
    name: 'ExperienceCardPane',
    props: {
      rootClassName: String,
      experiences: Array
    },
    components: {
      ExperienceCard,
    },
  }
  </script>
  
  <style scoped>
  .experience-card-pane-container {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
  .experience-card-pane-container1 {
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
  