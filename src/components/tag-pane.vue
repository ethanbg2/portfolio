<template>
    <v-expansion-panels class="panel-container">
        <v-expansion-panel>
            <v-expansion-panel-header class="panel-header-text">
                Filter By Skills
            </v-expansion-panel-header>
            <v-expansion-panel-content color="var(--dl-color-darkmode-base)">
              <info text="Click on a skill to show all the projects, work, and courses I used that skill in"></info>

                <div class="tag-pane-container">
                <app-tag @clicked="onTagClick" v-for="item in tags" :button="item"></app-tag>
                </div>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>

  </template>
  
  <script>
  import AppTag from './tag'
  import Info from './Info';
  
  export default {
    name: 'TagPane',
    props: {
      tags: {
        type: Set
      }
    },
    components: {
      AppTag,
      Info
    },
    methods: {
      onTagClick(value) {
        this.$emit("clicked", value)
      }
    }
  }
  </script>
  
  <style scoped>
  .panel-container {
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: var(--dl-space-space-twounits);
    margin-bottom: var(--dl-space-space-twounits);
  }
  .tag-pane-container {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
  }

  .panel-header-text {
    font-size: large;
    font-weight: 700;
    font-style: normal;
  }
  </style>  