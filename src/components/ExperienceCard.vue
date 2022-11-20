<template>
    <div class="experience-card-container" v-bind:class="rootClassName">
      <div class="experience-card-feature-card">
        <div class="experience-card-container1">
          <svg viewBox="0 0 1024 1024" class="experience-card-icon">
            <path
              d="M854 256q36 0 60 25t24 61v468q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-468q0-36 24-61t60-25h172v-86q0-36 24-60t60-24h172q36 0 60 24t24 60v86h172zM170 342v468h684v-468h-684zM598 256v-86h-172v86h172z"
            ></path>
          </svg>
          <span class="experience-card-text">
            <span>May 2021 - Aug 2022</span>
            <br />
          </span>
        </div>
        <h2 class="experience-card-text03">
          <span>
            Undergraduate Research Assistant 
            <span v-html="raw498c"></span>
          </span>
          <br />
        </h2>
        <span class="experience-card-text06">
          <span>Media and Advertising Lab UIUC</span>
          <br />
        </span>
        <span class="experience-card-text09">SEE MORE</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExperienceCard',
    props: {
      rootClassName: String,
    },
  
    data() {
      return {
        raw498c: ' ',
      }
    },
  }
  </script>
  
  <style scoped>
  .experience-card-container {
    width: 600px;
    height: auto;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin-top: var(--dl-space-space-unit);
    align-items: flex-start;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-unit);
    flex-direction: column;
    background-color: var(--dl-color-gray-white);
  }
  .experience-card-feature-card {
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-twounits);
    align-self: flex-start;
    align-items: center;
    border-radius: var(--dl-radius-radius-radius8);
    flex-direction: column;
  }
  .experience-card-container1 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .experience-card-icon {
    fill: var(--dl-color-gray-500);
    width: var(--dl-size-size-small);
    height: var(--dl-size-size-small);
    align-self: flex-start;
    margin-right: var(--dl-space-space-halfunit);
  }
  .experience-card-text {
    color: var(--dl-color-darkmode-base);
    align-self: center;
    text-align: center;
  }
  .experience-card-text03 {
    color: var(--dl-color-darkmode-base);
    align-self: flex-start;
    font-style: normal;
    margin-top: var(--dl-space-space-unit);
    text-align: center;
    font-weight: 500;
    margin-bottom: var(--dl-space-space-unit);
  }
  .experience-card-text06 {
    color: var(--dl-color-darkmode-base);
    align-self: flex-start;
    text-align: center;
  }
  .experience-card-text09 {
    color: var(--dl-color-darkmode-base);
    font-size: 0.75rem;
    margin-top: var(--dl-space-space-unit);
    font-weight: 500;
  }
  
  
  </style>
  