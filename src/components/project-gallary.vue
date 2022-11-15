<template>
    <div class="project-gallary-container" v-bind:class="rootClassName">
      <project-card 
        v-for="item in projects"
        :image_src="require(`@/assets/${item.image}`)"
        :heading="item.name"
        :text="item.type"
      >
      </project-card>
    </div>
  </template>
  
  <script>
  import ProjectCard from './project-card'
  
  export default {
    name: 'ProjectGallary',
    props: {
      projects: {
        type: Object,
        default: []
      }
    },
    components: {
      ProjectCard,
    },
  }
  </script>
  
  <style scoped>
  .project-gallary-container {
    flex: 0 0 auto;
    width: 80%;
    height: auto;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .project-gallary-root-class-name {
    align-self: center;
  }
  .project-gallary-root-class-name1 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
  </style>
  