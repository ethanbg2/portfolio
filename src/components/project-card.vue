<template>
      <router-link :to="`project/${heading}`" class="project-card-container">
        <img :src="image_src" :alt="image_alt" class="project-card-image" />
    <h1 class="project-card-text">{{ heading }}</h1>
    <span class="project-card-text1">{{ text }}</span>
    <svg viewBox="0 0 1024 1024" class="project-card-icon">
      <path d="M708 366l60 60-256 256-256-256 60-60 196 196z"></path>
    </svg>
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
  border-color: var(--dl-color-gray-white);
  border-style: solid;
  border-width: 8px;
  margin-right: var(--dl-space-space-twounits);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}
.project-card-image {
  width: var(--dl-size-size-xxlarge);
  height: var(--dl-size-size-xxlarge);
  align-self: center;
  object-fit: cover;
}
.project-card-text {
  color: var(--dl-color-gray-white);
  width: 100%;
  align-self: center;
  text-align: center;
}
.project-card-text1 {
  color: var(--dl-color-gray-white);
  width: 100%;
  align-self: center;
  text-align: center;
}
.project-card-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
  margin-top: var(--dl-space-space-halfunit);
}



</style>
