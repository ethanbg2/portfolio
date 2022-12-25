<template>
    <div class="bio-container" v-bind:class="rootClassName">
      <div class="bio-container1">
        <img :src="image_src" :alt="image_alt" class="bio-image" />
        <span class="bio-text">{{ text }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bio',
    props: {
      image_src: {
        type: String,
        default: 'https://play.teleporthq.io/static/svg/default-img.svg',
      },
      image_alt: {
        type: String,
        default: 'image',
      },
      text: {
        type: String,
        default: 'asdfasdfs',
      },
      rootClassName: String,
    },
  }
  </script>
  
  <style scoped>
  .bio-container {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    max-width: var(--dl-size-size-maxwidth);
    margin-top: var(--dl-space-space-twounits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .bio-container1 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .bio-image {
    width: var(--dl-size-size-xxlarge);
    object-fit: cover;
    margin-left: var(--dl-space-space-threeunits);
    border-radius: var(--dl-radius-radius-radius8);
  }
  .bio-text {
    color: var(--dl-color-gray-white);
    font-size: 24px;
    margin-top: var(--dl-space-space-unit);
    margin-left: var(--dl-space-space-threeunits);
  }
  
  </style>
  