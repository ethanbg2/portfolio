<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <app-social :github_link="github_link" :linkedin_link="linkedin_link" :email_link="mail_link"></app-social>
  </footer>
</template>

<script>
import AppSocial from './social'
const resume = require(process.env.VUE_APP_RESUME_FILE)

export default {
  name: 'Footer',
  props: {
    rootClassName: String,
  },
  data () {
    return {
      jsonQuery: require('json-query'),
      linkedin_link: "",
      github_link: "",
      mail_link: ""
    }
  },
  created () {
    this.linkedin_link = this.jsonQuery('basics.profiles[network=LinkedIn].url', {
      data: resume
    }).value

    this.github_link = this.jsonQuery('basics.profiles[network=GitHub].url', {
      data: resume
    }).value

    var email = resume.basics.email
    this.mail_link = `mailto:${email}`
    console.log(this.mail_link)

  },
  components: {
    AppSocial,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: center;
}


@media(max-width: 767px) {
  .footer-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
}
</style>
