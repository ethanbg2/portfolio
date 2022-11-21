<template>
    <div class="static-tag-container" v-bind:class="rootClassName">
      <button class="static-tag-button button">{{ text }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StaticTag',
    props: {
      text: {
        type: String,
        default: 'Button',
      },
      rootClassName: String,
    },
  }
  </script>
  
  <style scoped>
  .static-tag-container {
    width: auto;
    height: auto;
    display: flex;
    padding: 4px;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
  .static-tag-button {
    color: var(--dl-color-primary-700);
    width: auto;
    padding: 4px;
    align-self: center;
    border-width: 0px;
    border-radius: 50px;
    background-color: rgba(133, 220, 255, 0.25);
  }
  .static-tag-root-class-name {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .static-tag-root-class-name1 {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .static-tag-root-class-name2 {
    margin: 0px;
  }
  
  
  @media(max-width: 479px) {
    .static-tag-container {
      padding: 4px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .static-tag-root-class-name {
      margin: 0px;
      align-self: flex-start;
    }
  }
  </style>
  