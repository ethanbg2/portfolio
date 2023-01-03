<template>
    <div class="highlights-container">
      <div class="highlights-container1">
        <h3 class="highlights-text">{{ heading }}</h3>
        <highlight-card
          v-for="item in highlights"
          :title="item.title"
          :description="item.description"
        ></highlight-card>
      </div>
    </div>
  </template>
  
  <script>
  import HighlightCard from './highlight-card'
  
  export default {
    name: 'Highlights',
    props: {
      heading: {
        type: String,
        default: 'Heading',
      },
      highlights: {
        type: Array,
        default: []
      }
    },
    components: {
      HighlightCard,
    },
  }
  </script>
  
  <style scoped>
  .highlights-container {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    max-width: var(--dl-size-size-maxwidth);
    margin-top: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .highlights-container1 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .highlights-text {
    color: var(--dl-color-gray-white);
    font-size: 1.5em;
    margin-left: var(--dl-space-space-threeunits);
    margin-bottom: var(--dl-space-space-unit);
  }
  
  
  
  </style>
  