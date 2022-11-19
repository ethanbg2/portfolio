<template>
    <div class="work-container" v-bind:class="rootClassName">
      <h1 id="work" class="work-text">
        <span >My Work</span>
        <br />
      </h1>
      <tag-pane rootClassName="tag-pane-root-class-name"></tag-pane>
      <h2 id="projects" class="work-text">
        <span >Projects</span>
        <br />
      </h2>
      <project-gallary :projects="projects"></project-gallary>
      <h2 id="experience" class="work-text">
        <span >Work Experience</span>
        <br />
      </h2>
      <h2 id="courses" class="work-text">
        <span >Courses</span>
        <br />
      </h2>
    </div>
  </template>
  
  <script>
  import TagPane from './tag-pane'
  import ProjectGallary from './project-gallary'
  
  export default {
    name: 'Work',
    props: {
      projects: {
        type: Object
      },
      rootClassName: String,

    },
    components: {
      TagPane,
      ProjectGallary,
    },
  }
  </script>
  
  <style scoped>
  .work-container {
    width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--dl-color-darkmode-base);
  }
  .work-text {
    margin-top: var(--dl-space-space-threeunits);
    margin-bottom: var(--dl-space-space-threeunits);
    color: var(--dl-color-gray-white);
  }
  
  </style>
  