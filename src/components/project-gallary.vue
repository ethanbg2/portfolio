<template>
    <div class="project-gallary-container">
      <project-card 
        v-for="item in projects"
        :image_src="require(`@/assets/${item.images[0]}`)"
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
        type: Array,
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
    max-width: var(--dl-size-size-maxwidth);
  }
  .project-gallary-root-class-name {
    align-self: center;
  }
  .project-gallary-root-class-name1 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
  </style>
  