<template>
    <div class="course-card-pane-container" v-bind:class="rootClassName">
      <div class="course-card-pane-container1">
        <course-card v-for="item in courses" :name="item.name"></course-card>
      </div>
    </div>
  </template>
  
  <script>
  import CourseCard from './CourseCard'
  
  export default {
    name: 'CourseCardPane',
    props: {
      rootClassName: String,
      courses: Array
    },
    components: {
      CourseCard,
    },
  }
  </script>
  
  <style scoped>
  .course-card-pane-container {
    width: 65%;
    height: auto;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
  .course-card-pane-container1 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  
  </style>
  