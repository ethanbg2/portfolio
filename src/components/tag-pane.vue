<template>
    <div class="tag-pane-container">
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="c++" rootClassName="tag-root-class-name15"></app-tag>
      <app-tag button="vue.js" rootClassName="tag-root-class-name17"></app-tag>
      <app-tag button="MUI" rootClassName="tag-root-class-name18"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="Python" rootClassName="tag-root-class-name19"></app-tag>
      <app-tag button="c++" rootClassName="tag-root-class-name15"></app-tag>
      <app-tag button="react.js" rootClassName="tag-root-class-name16"></app-tag>
    </div>
  </template>
  
  <script>
  import AppTag from './tag'
  
  export default {
    name: 'TagPane',
    props: {},
    components: {
      AppTag,
    },
  }
  </script>
  
  <style scoped>
  .tag-pane-container {
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  </style>  