<template>
  <div class="work-container" v-bind:class="rootClassName">
    <app-header></app-header>
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
    <app-footer></app-footer>
  </div>
</template>

<script>
import TagPane from '../components/tag-pane'
import ProjectGallary from '../components/project-gallary'
import CourseCardPane from '../components/CourseCardPane'
import ExperienceCardPane from '../components/ExperienceCardPane'
import AppHeader from '../components/header'
import AppFooter from '../components/footer'
const resume = require(process.env.VUE_APP_RESUME_FILE)

export default {
  name: 'Work',
  props: {
    text: {
      type: String,
      default: 'My Work',
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
    ExperienceCardPane,
    AppHeader,
    AppFooter
  },
  data() {
    return {
            resume: resume,
            queries: new Set(), 
            jsonQuery: require('json-query'), 
            skills: [],
            current_projects: resume.projects,
            current_courses: resume.courses,
            current_work: resume.work
          }
  },
  created() {
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

    // sort skills in decreasing order of frequency
    Array.prototype.byCount= function(){
      var itm, a= [], L= this.length, o= {};
      for(var i= 0; i<L; i++){
          itm= this[i];
          if(!itm) continue;
          if(o[itm]== undefined) o[itm]= 1;
          else ++o[itm];
      }
      for(var p in o) a[a.length]= p;
      return a.sort(function(a, b){
          return o[b]-o[a];
      });
    }

    var all_skills = [...project_skills, ...work_skills, ...school_skills]
    this.skills = all_skills.byCount()
  },

  methods: {
    updateSelections() {
      var filter_by_query = function(query, element) {
          var skills = element.skills
          for (var i = 0; i < skills.length; i++) {
            var item = skills[i]
            if (query.includes(item)) {
              return true
            }
          }
          return false
      }

      this.current_projects = this.resume.projects.filter(filter_by_query.bind(this, [...this.queries]))
      this.current_courses = this.resume.courses.filter(filter_by_query.bind(this, [...this.queries]))
      this.current_work = this.resume.work.filter(filter_by_query.bind(this, [...this.queries]))
    },

    onTagClick(value) {
      const first = value[0]
      if (first == "!") {
        var tag = value.split("!")[1]
        this.queries.delete(tag)
      } else {
        this.queries.add(value)
      }

      if (this.queries.size == 0) {
        this.current_projects= this.resume.projects,
        this.current_courses= this.resume.courses,
        this.current_work= this.resume.work
      } else {
        this.updateSelections()
      }
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
    background-color: var(--dl-color-darkmode-base);
}
.work-text {
  font-size: 3em;
  align-self: center;
  margin-top: var(--dl-space-space-threeunits);
}
.work-text01 {
  color: var(--dl-color-gray-white);
}
.work-text03 {
  font-size: 2rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text04 {
  color: var(--dl-color-gray-white);
}
.work-heading {
  font-size: 2rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text06 {
  color: var(--dl-color-gray-white);
}
.work-text08 {
  font-size: 2rem;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.work-text09 {
  color: var(--dl-color-gray-white);
}

</style>
