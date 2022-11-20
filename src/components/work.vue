<template>
  <div class="work-container" v-bind:class="rootClassName">
    <h1 id="work" class="work-text">
      <span class="work-text01">{{ text }}</span>
      <br />
    </h1>
    <tag-pane rootClassName="tag-pane-root-class-name"></tag-pane>
    <h2 id="projects" class="work-text03">
      <span class="work-text04">{{ text1 }}</span>
      <br />
    </h2>
    <project-gallary :projects="projects"></project-gallary>
    <h2 id="experience" class="work-heading">
      <span class="work-text06">{{ text211 }}</span>
      <br />
    </h2>
    <experience-card-pane></experience-card-pane>
    <h2 id="courses" class="work-text08">
      <span class="work-text09">{{ text21 }}</span>
      <br />
    </h2>
    <course-card-pane></course-card-pane>
  </div>
</template>

<script>
import TagPane from './tag-pane'
import ProjectGallary from './project-gallary'
import CourseCardPane from './CourseCardPane'
import ExperienceCardPane from './ExperienceCardPane'

export default {
  name: 'Work',
  props: {
    text: {
      type: String,
      default: 'My Work',
    },
    projects: {
        type: Object
    },
    text21: {
      type: String,
      default: 'Courses',
    },
    text1: {
      type: String,
      default: 'Projects',
    },
    rootClassName: String,
    text211: {
      type: String,
      default: 'Work Experience',
    },
  },
  components: {
    TagPane,
    ProjectGallary,
    CourseCardPane,
    ExperienceCardPane
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
    margin-top: var(--dl-space-space-fourunits);
    background-color: var(--dl-color-darkmode-base);
}
.work-text {
  font-size: 4em;
  align-self: center;
  margin-top: var(--dl-space-space-threeunits);
}
.work-text01 {
  color: var(--dl-color-gray-white);
}
.work-text03 {
  font-size: 3rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text04 {
  color: var(--dl-color-gray-white);
}
.work-heading {
  font-size: 3rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text06 {
  color: var(--dl-color-gray-white);
}
.work-text08 {
  font-size: 3rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text09 {
  color: var(--dl-color-gray-white);
}

</style>
