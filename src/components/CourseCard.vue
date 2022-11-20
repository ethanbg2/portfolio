<template>
    <div class="course-card-container" v-bind:class="rootClassName">
      <svg viewBox="0 0 1024 1024" class="course-card-icon">
        <path
          d="M746 612q52 0 108 10v64q-40-10-108-10-120 0-192 42v-72q76-34 192-34zM554 532q84-34 192-34 52 0 108 10v64q-40-10-108-10-120 0-192 42v-72zM746 448q-120 0-192 42v-70q80-36 192-36 52 0 108 10v66q-48-12-108-12zM896 790v-492q-66-20-150-20-130 0-234 64v490q104-64 234-64 78 0 150 22zM746 192q152 0 236 64v622q0 8-7 15t-15 7q-6 0-10-2-82-44-204-44-130 0-234 64-86-64-234-64-108 0-204 46-2 0-5 1t-5 1q-8 0-15-6t-7-14v-626q86-64 236-64 148 0 234 64 86-64 234-64z"
        ></path>
      </svg>
      <h2 class="course-card-text">Lorem ipsum</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseCard',
    props: {
      rootClassName: String,
    },
  }
  </script>
  
  <style scoped>
  .course-card-container {
    width: var(--dl-size-size-xxlarge);
    height: 70px;
    display: flex;
    position: relative;
    margin-top: var(--dl-space-space-unit);
    align-items: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-unit);
    flex-direction: column;
    justify-content: center;
    background-color: var(--dl-color-gray-white);
  }
  .course-card-icon {
    fill: var(--dl-color-darkmode-base);
    width: 24px;
    height: 24px;
  }
  .course-card-text {
    color: var(--dl-color-darkmode-base);
    align-self: center;
    font-style: normal;
    text-align: center;
    font-weight: 500;
  }
  
  
  
  
  
  </style>
  