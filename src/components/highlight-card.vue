<template>
    <div class="highlight-card-feature-card">
      <h2 class="highlight-card-text"> {{title}}</h2>
      <span class="highlight-card-text1">
        {{ description }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HighlightCard',
    props: {
      title: {
        type: String,
        default: "Title"
      },
      description: {
        type: String,
        default: "Lorem ipsum dolor sit amet."
      }
    },
  }
  </script>
  
  <style scoped>
  .highlight-card-feature-card {
    width: 65%;
    display: flex;
    padding: var(--dl-space-space-unit);
    position: relative;
    flex-wrap: wrap;
    max-width: auto;
    margin-top: var(--dl-space-space-halfunit);
    align-items: flex-start;
    margin-left: var(--dl-space-space-threeunits);
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-halfunit);
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--dl-color-gray-white);
  }
  .highlight-card-text {
    color: var(--dl-color-darkmode-base);
    font-weight: 600;
    margin-bottom: var(--dl-space-space-unit);
  }
  .highlight-card-text1 {
    color: var(--dl-color-darkmode-base);
  }
  
  @media(max-width: 479px) {
    .highlight-card-text {
      font-style: normal;
      font-weight: 600;
    }
  }
  </style>
  