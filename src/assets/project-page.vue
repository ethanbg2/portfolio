<template>
    <div class="project-page-container">
      <app-header></app-header>
      <app-footer></app-footer>
      <div class="project-page-testimonial">
        <div class="project-page-container1">
          <h1 class="project-page-text">
            <span>What they’re saying</span>
            <br />
            <span></span>
          </h1>
          <span class="project-page-text3">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
            </span>
          </span>
          <div class="project-page-container2">
            <testimonial-card1
              picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></testimonial-card1>
            <testimonial-card1 rootClassName="rootClassName"></testimonial-card1>
            <testimonial-card1
              picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></testimonial-card1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from './header'
  import AppFooter from './footer'
  import TestimonialCard1 from './testimonial-card1'
  
  export default {
    name: 'ProjectPage',
    props: {},
    components: {
      AppHeader,
      AppFooter,
      TestimonialCard1,
    },
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
    justify-content: flex-start;
    background-color: var(--dl-color-darkmode-base);
  }
  .project-page-testimonial {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: 232323;
  }
  .project-page-container1 {
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-threeunits);
    max-width: var(--dl-size-size-maxwidth);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .project-page-text {
    color: var(--dl-color-gray-white);
  }
  .project-page-text3 {
    color: var(--dl-color-gray-white);
    font-size: 0.75rem;
    max-width: 600px;
    margin-top: var(--dl-space-space-unit);
    text-align: center;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .project-page-container2 {
    width: 100%;
    display: grid;
    grid-gap: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width: 991px) {
    .project-page-text {
      text-align: center;
    }
    .project-page-text3 {
      text-align: center;
    }
    .project-page-container2 {
      grid-template-columns: 1fr;
    }
  }
  @media(max-width: 767px) {
    .project-page-container1 {
      padding-left: var(--dl-space-space-twounits);
      padding-right: var(--dl-space-space-twounits);
    }
  }
  @media(max-width: 479px) {
    .project-page-container1 {
      padding-top: var(--dl-space-space-twounits);
      padding-left: var(--dl-space-space-unit);
      padding-right: var(--dl-space-space-unit);
      padding-bottom: var(--dl-space-space-twounits);
    }
  }
  </style>
  