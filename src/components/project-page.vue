<template>
  <div class="project-page-container">
    <app-header></app-header>
    <div class="project-page-container1">
      <h1 class="project-page-text">
        <span>{{this_project}}</span>
        <br />
      </h1>
      <div class="project-page-container2">
        <svg viewBox="0 0 1024 1024" class="project-page-icon">
          <path
            d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"
          ></path>
        </svg>
        <span class="project-page-text03">
          <span>Jul 2020</span>
          <br />
        </span>
        <svg viewBox="0 0 1024 1024" class="project-page-icon2">
          <path
            d="M566.286 585.143l36.571-146.286h-145.143l-36.571 146.286h145.143zM1005.143 297.143l-32 128c-2.286 8-9.143 13.714-17.714 13.714h-186.857l-36.571 146.286h177.714c5.714 0 10.857 2.857 14.286 6.857 3.429 4.571 5.143 10.286 3.429 16l-32 128c-1.714 8-9.143 13.714-17.714 13.714h-186.857l-46.286 187.429c-2.286 8-9.714 13.714-17.714 13.714h-128c-5.714 0-11.429-2.857-14.857-6.857-3.429-4.571-4.571-10.286-3.429-16l44.571-178.286h-145.143l-46.286 187.429c-2.286 8-9.714 13.714-17.714 13.714h-128.571c-5.143 0-10.857-2.857-14.286-6.857-3.429-4.571-4.571-10.286-3.429-16l44.571-178.286h-177.714c-5.714 0-10.857-2.857-14.286-6.857-3.429-4.571-4.571-10.286-3.429-16l32-128c2.286-8 9.143-13.714 17.714-13.714h186.857l36.571-146.286h-177.714c-5.714 0-10.857-2.857-14.286-6.857-3.429-4.571-5.143-10.286-3.429-16l32-128c1.714-8 9.143-13.714 17.714-13.714h186.857l46.286-187.429c2.286-8 9.714-13.714 18.286-13.714h128c5.143 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16l-44.571 178.286h145.143l46.286-187.429c2.286-8 9.714-13.714 18.286-13.714h128c5.143 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16l-44.571 178.286h177.714c5.714 0 10.857 2.857 14.286 6.857 3.429 4.571 4.571 10.286 3.429 16z"
          ></path>
        </svg>
        <span class="project-page-text06">
          <span>Mobile Application</span>
          <br />
        </span>
      </div>
      <div class="project-page-container3">
        <span class="project-page-text09">Skills:</span>
        <div class="project-page-container4">
          <static-tag rootClassName="static-tag-root-class-name"></static-tag>
          <static-tag rootClassName="static-tag-root-class-name1"></static-tag>
          <static-tag rootClassName="static-tag-root-class-name2"></static-tag>
          <static-tag rootClassName="static-tag-root-class-name3"></static-tag>
          <static-tag rootClassName="static-tag-root-class-name4"></static-tag>
        </div>
      </div>
      <div class="project-page-separator"></div>
      <div class="project-page-container5">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          class="project-page-image"
        />
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          class="project-page-image1"
        />
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          class="project-page-image2"
        />
      </div>
      <span class="project-page-text10">
        <span>
          here is a short description of the project that will  give an overview
          and put everything into context
        </span>
        <br />
      </span>
      <h2 class="project-page-text13">
        <span>Contributions</span>
        <br />
      </h2>
      <div class="project-page-container6">
        <list-item rootClassName="list-item-root-class-name2"></list-item>
        <list-item rootClassName="list-item-root-class-name3"></list-item>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './header'
import StaticTag from './StaticTag'
import ListItem from './ListItem'
import AppFooter from './footer'
import resume from '@/assets/resume.json'

export default {
  name: 'ProjectPage',
  data () {
    return {resume: resume, this_project: undefined}
  },
  props: {},
  components: {
    AppHeader,
    StaticTag,
    ListItem,
    AppFooter,
  },
  created () {
    const name = this.$route.params.id
    for (const [_, project] of Object.entries(resume.projects)) {
      if (name == project.name) {
        this.this_project = name
        break
      }
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
.project-page-container1 {
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
.project-page-container2 {
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
.project-page-container3 {
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
.project-page-container4 {
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
.project-page-container5 {
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
  height: auto;
  margin-top: var(--dl-space-space-halfunit);
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-halfunit);
}
.project-page-image1 {
  width: var(--dl-size-size-xxlarge);
  height: auto;
  margin: var(--dl-space-space-halfunit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.project-page-image2 {
  width: var(--dl-size-size-xxlarge);
  height: auto;
  margin: var(--dl-space-space-halfunit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.project-page-text10 {
  color: var(--dl-color-gray-white);
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  margin-left: 0px;
}
.project-page-text13 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.project-page-container6 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 1600px) {
  .project-page-container1 {
    width: 100%;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .project-page-container1 {
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
  .project-page-container2 {
    margin-bottom: 0px;
  }
  .project-page-container4 {
    width: 90%;
  }
  .project-page-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .project-page-container5 {
    justify-content: center;
  }
  .project-page-image1 {
    margin-left: 0px;
  }
}
</style>
