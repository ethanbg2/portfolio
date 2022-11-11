<template>
  <div class="hero-hero">
    <div class="hero-container">
      <div class="hero-container1">
        <h1 class="hero-text">
          <span>Hi, I&apos;m Ethan</span>
          <br />
        </h1>
        <span class="hero-text3">
          <span>
            Here is My bio, insert text to this, I wonder how long it can get.
            let&apos;s try it out right now!
          </span>
          <br />
        </span>
        <app-button
          rootClassName="button-root-class-name1"
          button="Download Resume"
        ></app-button>
      </div>
    </div>
    <img id="profile" :alt="image_alt" :src="image_src" class="hero-image" />
  </div>
</template>

<script>
import AppButton from './button'

export default {
  name: 'Hero',
  props: {
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&ixlib=rb-1.2.1&h=1500',
    },
    image_alt: {
      type: String,
      default: 'profile',
    },
  },
  components: {
    AppButton,
  },
}
</script>

<style scoped>
.hero-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.hero-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.hero-container1 {
  width: auto;
  height: auto;
  display: flex;
  margin-right: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.hero-text {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  max-width: 450px;
}
.hero-text3 {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 100%;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.hero-image {
  width: 400px;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .hero-text3 {
    color: var(--dl-color-gray-white);
  }
}
@media(max-width: 1200px) {
  .hero-hero {
    max-width: 100%;
  }
  .hero-container1 {
    margin-right: var(--dl-space-space-twounits);
  }
  .hero-image {
    width: 400px;
    margin-right: 0px;
  }
}
@media(max-width: 991px) {
  .hero-hero {
    flex-direction: column;
  }
  .hero-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .hero-text {
    text-align: center;
  }
  .hero-text3 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .hero-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .hero-text3 {
    color: var(--dl-color-gray-white);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .hero-image {
    width: 80%;
  }
}
@media(max-width: 479px) {
  .hero-hero {
    margin-top: var(--dl-space-space-threeunits);
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .hero-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .hero-text3 {
    color: var(--dl-color-gray-white);
  }
}
</style>
