<template>
  <router-link :to="`project/${heading}`" class="project-card-container">
    <img :alt="image_alt" :src="image_src" class="project-card-image" />
    <h2 class="project-card-text">{{heading}}</h2>
    <span class="project-card-text1">{{ text }}</span>
    <span class="project-card-text2">SEE MORE</span>
  </router-link>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
      heading: {
        type: String,
        default: 'Heading',
      },
      text: {
        type: String,
        default: 'Text',
      },
      rootClassName: String,
  },
}
</script>

<style scoped>
.project-card-container {
  width: 305px;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  box-shadow: 0px 0px 5px 2px #000000;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-white);
}
.project-card-image {
  width: 305px;
  height: var(--dl-size-size-xxlarge);
  align-self: center;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.project-card-text {
  color: var(--dl-color-darkmode-base);
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-halfunit);
}
.project-card-text1 {
  color: var(--dl-color-darkmode-base);
  width: 100%;
  align-self: center;
  text-align: center;
}
.project-card-text2 {
  color: var(--dl-color-darkmode-base);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
}



</style>
