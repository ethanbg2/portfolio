<template>
  <div class="project-page-container">
    <app-header></app-header>
    <div v-if="this_project" class="project-page-container01">
      <h1 v-if="is_project" class="project-page-text">
        <span>{{this_project.name}}</span>
        <br />
      </h1>
      <h1 v-else-if="is_work" class="project-page-text">
        <span>{{this_project.company}}</span>
        <br />
      </h1>
      <div class="project-page-container02">
        <svg viewBox="0 0 1024 1024" class="project-page-icon">
          <path
            d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"
          ></path>
        </svg>
        <span class="project-page-text03">
          <span>{{this_project.date}}</span>
          <br />
        </span>
        <svg viewBox="0 0 1024 1024" class="project-page-icon2">
          <path
            d="M566.286 585.143l36.571-146.286h-145.143l-36.571 146.286h145.143zM1005.143 297.143l-32 128c-2.286 8-9.143 13.714-17.714 13.714h-186.857l-36.571 146.286h177.714c5.714 0 10.857 2.857 14.286 6.857 3.429 4.571 5.143 10.286 3.429 16l-32 128c-1.714 8-9.143 13.714-17.714 13.714h-186.857l-46.286 187.429c-2.286 8-9.714 13.714-17.714 13.714h-128c-5.714 0-11.429-2.857-14.857-6.857-3.429-4.571-4.571-10.286-3.429-16l44.571-178.286h-145.143l-46.286 187.429c-2.286 8-9.714 13.714-17.714 13.714h-128.571c-5.143 0-10.857-2.857-14.286-6.857-3.429-4.571-4.571-10.286-3.429-16l44.571-178.286h-177.714c-5.714 0-10.857-2.857-14.286-6.857-3.429-4.571-4.571-10.286-3.429-16l32-128c2.286-8 9.143-13.714 17.714-13.714h186.857l36.571-146.286h-177.714c-5.714 0-10.857-2.857-14.286-6.857-3.429-4.571-5.143-10.286-3.429-16l32-128c1.714-8 9.143-13.714 17.714-13.714h186.857l46.286-187.429c2.286-8 9.714-13.714 18.286-13.714h128c5.143 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16l-44.571 178.286h145.143l46.286-187.429c2.286-8 9.714-13.714 18.286-13.714h128c5.143 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16l-44.571 178.286h177.714c5.714 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16z"
          ></path>
        </svg>
        <span v-if="is_project" class="project-page-text06">
          <span>{{this_project.type}}</span>
          <br />
        </span>
        <span v-else-if="is_work" class="project-page-text06">
          <span>{{this_project.position}}</span>
          <br />
        </span>
      </div>
      <div class="project-page-container03">
        <span class="project-page-text09">Skills:</span>
        <div class="project-page-container04">
          <static-tag v-for="item in this_project.skills" :text="item"></static-tag>
        </div>
      </div>
      <div class="project-page-separator"></div>
      <div class="project-page-container05">
        <img v-if="is_project"
          :src="require(`@/assets/${this_project.images[0]}`)"
          alt="image"
          class="project-page-image"
        />
        <img v-if="is_project"
          :src="require(`@/assets/${this_project.images[1]}`)"
          alt="image"
          class="project-page-image1"
        />
        <img v-if="is_project"
          :src="require(`@/assets/${this_project.images[2]}`)"
          alt="image"
          class="project-page-image2"
        />
      </div>
      <span class="project-page-text10">
        <span>
          {{this_project.description}}
        </span>
        <br />
      </span>
      <div class="project-page-container06">
        <svg viewBox="0 0 1024 1024" class="project-page-icon4">
          <path
            d="M810 854v-684h-84v128h-428v-128h-84v684h596zM512 86q-18 0-30 12t-12 30 12 30 30 12 30-12 12-30-12-30-30-12zM810 86q34 0 60 25t26 59v684q0 34-26 59t-60 25h-596q-34 0-60-25t-26-59v-684q0-34 26-59t60-25h178q14-38 46-62t74-24 74 24 46 62h178z"
          ></path>
        </svg>
        <h2 class="project-page-text13">Contributions</h2>
      </div>
      <div class="project-page-container07">
        <list-item v-for="item in this_project.contributions" :text="item"></list-item>
      </div>
      <div class="project-page-container08">
        <svg viewBox="0 0 1024 1024" class="project-page-icon6">
          <path
            d="M804.571 530.286v182.857c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h402.286c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-402.286c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-182.857c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM1024 36.571v292.571c0 20-16.571 36.571-36.571 36.571-9.714 0-18.857-4-25.714-10.857l-100.571-100.571-372.571 372.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-65.143-65.143c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l372.571-372.571-100.571-100.571c-6.857-6.857-10.857-16-10.857-25.714 0-20 16.571-36.571 36.571-36.571h292.571c20 0 36.571 16.571 36.571 36.571z"
          ></path>
        </svg>
        <h2 class="project-page-text14">
          <span>Links</span>
          <br />
        </h2>
      </div>
      <div class="project-page-container09">
        <a v-for="item in this_project.links" 
          :href="item.url"
          target="_blank"
          rel="noreferrer noopener"
          class="project-page-link"
        >
          {{item.text}}
        </a>
      </div>
      <!-- uncomment this when I add project gallary to work page -->
      <!-- <project-gallary v-if="is_work" :projects="work_projects"></project-gallary> -->
    </div>
    <div v-else class="project-page-container01">
      <h1 class="project-page-text">
        <span>Project Not Found</span>
        <br />
      </h1>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './header'
import StaticTag from './StaticTag'
import ListItem from './ListItem'
import AppFooter from './footer'
import ProjectGallary from './project-gallary'
const resume = require(process.env.VUE_APP_RESUME_FILE)

export default {
  name: 'ProjectPage',
  data () {
    return {
      resume: resume, 
      this_project: undefined,
      jsonQuery: require('json-query'),
      is_project: false,
      is_work: false,
      work_projects: []
    }
  },
  props: {},
  components: {
    AppHeader,
    StaticTag,
    ListItem,
    AppFooter,
    ProjectGallary
  },
  created () {
    const name = this.$route.params.id

    var project = this.jsonQuery(`projects[name=${name}]`, {
      data: this.resume
    }).value

    var company = this.jsonQuery(`work[company=${name}]`, {
      data: this.resume
    }).value

    if (project) {
      this.is_project = true
      this.this_project = project
    } else if (company) {
      this.is_work = true
      this.this_project = company

      // uncomment this when I add project gallary to work page

      // var company_projects = company.projects
      // for (var i = 0; i < company_projects.length; i++) {
      //   var proj_name = company_projects[i]
      //   var proj_obj = this.jsonQuery(`projects[name=${proj_name}]`, {
      //     data: this.resume
      //   }).value
      //   this.work_projects.push(proj_obj)
      // }
    }
  }
  
}
</script>

<style scoped>
.project-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-darkmode-base);
}
.project-page-container01 {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-threeunits);
  align-items: flex-start;
  margin-left: 0%;
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.project-page-text {
  color: var(--dl-color-gray-white);
  font-size: 2rem;
  align-self: flex-start;
}
.project-page-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
}
.project-page-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  align-self: center;
}
.project-page-text03 {
  color: var(--dl-color-gray-white);
  align-self: center;
  margin-left: 4px;
}
.project-page-icon2 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  align-self: center;
  margin-left: var(--dl-space-space-oneandhalfunits);
}
.project-page-text06 {
  color: var(--dl-color-gray-white);
  align-self: center;
  margin-left: 4px;
}
.project-page-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  justify-content: flex-start;
}
.project-page-text09 {
  color: var(--dl-color-gray-white);
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: 0px;
  margin-bottom: 0px;
}
.project-page-container04 {
  flex: 0 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
}
.project-page-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.project-page-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
}
.project-page-image {
  width: var(--dl-size-size-xxlarge);
  height: var(--dl-size-size-xxlarge);
  margin-top: var(--dl-space-space-halfunit);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
}
.project-page-image1 {
  width: var(--dl-size-size-xxlarge);
  height: var(--dl-size-size-xxlarge);
  margin: var(--dl-space-space-halfunit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.project-page-image2 {
  width: var(--dl-size-size-xxlarge);
  height: var(--dl-size-size-xxlarge);
  margin: var(--dl-space-space-halfunit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.project-page-text10 {
  color: var(--dl-color-gray-white);
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 200;
  line-height: 2;
  margin-left: 0px;
}
.project-page-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
}
.project-page-icon4 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.project-page-text13 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  align-self: center;
  margin-top: 0px;
  margin-left: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.project-page-container07 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}
.project-page-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.project-page-icon6 {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
  align-self: center;
}
.project-page-text14 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  align-self: center;
  margin-top: 0px;
  margin-left: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.project-page-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.project-page-link {
  color: var(--dl-color-darkmode-4);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: underline;
}
.project-page-link:hover {
  color: var(--dl-color-gray-white);
}
@media(max-width: 1600px) {
  .project-page-container01 {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .project-page-container01 {
    align-self: center;
  }
}
@media(max-width: 991px) {
  .project-page-image2 {
    margin-left: 0px;
  }
}
@media(max-width: 767px) {
  .project-page-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .project-page-container02 {
    margin-bottom: 0px;
  }
  .project-page-container04 {
    width: 90%;
  }
  .project-page-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .project-page-container05 {
    justify-content: center;
  }
  .project-page-image1 {
    margin-left: 0px;
  }
}
</style>
