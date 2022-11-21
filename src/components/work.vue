<template>
  <div class="work-container" v-bind:class="rootClassName">
    <h1 id="work" class="work-text">
      <span class="work-text01">{{ text }}</span>
      <br />
    </h1>
    <tag-pane @clicked="onTagClick" :tags="skills"></tag-pane>
    <h2 id="projects" class="work-text03">
      <span class="work-text04">{{ text1 }}</span>
      <br />
    </h2>
    <project-gallary :projects="current_projects"></project-gallary>
    <h2 id="experience" class="work-heading">
      <span class="work-text06">{{ text211 }}</span>
      <br />
    </h2>
    <experience-card-pane :experiences="current_work"></experience-card-pane>
    <h2 id="courses" class="work-text08">
      <span class="work-text09">{{ text21 }}</span>
      <br />
    </h2>
    <course-card-pane :courses="current_courses"></course-card-pane>
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
    resume: {
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
  data() {
    return {queries: new Set(), 
            jsonQuery: require('json-query'), 
            skills: new Set(),
            current_projects: this.resume.projects,
            current_courses: this.resume.courses,
            current_work: this.resume.work
            }
  },
  created() {
    console.log("created")
    // compile all skills
    var project_skills = this.jsonQuery('projects.skills', {
      data: this.resume
    }).value
    var work_skills = this.jsonQuery('work.skills', {
      data: this.resume
    }).value
    var school_skills = this.jsonQuery('courses.skills', {
      data: this.resume
    }).value

    this.skills = new Set([...project_skills, ...work_skills, ...school_skills])
  },
  methods: {
    onTagClick(value) {
      const first = value[0]
      if (first == "!") {
        var tag = value.split("!")[1]
        this.queries.delete(tag)
      } else {
        this.queries.add(value)
      }
      console.log(this.queries)
    }
  }
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
