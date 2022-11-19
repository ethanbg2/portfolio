<template>
  <div class="hero-hero">
    <div class="hero-container">
      <h1 class="hero-text">
        <span>Hi, I&apos;m Ethan.</span>
        <br />
      </h1>
      <span class="hero-text3">
        <span>
          {{bio}}
        </span>
        <br />
      </span>
      <app-button
        button="Download Resume"
        :link="button_link"
        rootClassName="button-root-class-name1"
      ></app-button>
    </div>
    <img id="profile" :alt="image_alt" :src="image_src" class="hero-image" />
  </div>
</template>

<script>
import AppButton from './button'

export default {
  name: 'Hero',
  props: {
    image_alt: {
      type: String,
      default: 'profile',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&ixlib=rb-1.2.1&w=300',
    },
    bio: {
      type: String,
      default: 'Here is My bio, insert text to this, I wonder how long it can get'
    },
    button_link: {
      type: String,
      default: 'https://www.google.com'
    }
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
  flex-wrap: wrap;
  max-width: var(--dl-size-size-maxwidth);
  min-height: 80%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.hero-container {
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.hero-text {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  max-width: 450px;
}
.hero-text3 {
  color: var(--dl-color-gray-900);
  width: 100%;
  height: 100%;
  font-size: 20px;
  align-self: stretch;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-twounits);
}
.hero-image {
  width: var(--dl-size-size-xxlarge);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
@media(max-width: 1600px) {
  .hero-container {
    flex-wrap: wrap;
  }
  .hero-text3 {
    color: var(--dl-color-gray-white);
  }
  .hero-image {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
}
@media(max-width: 1200px) {
  .hero-hero {
    max-width: 100%;
    min-height: 80%;
    align-items: center;
    justify-content: center;
  }
  .hero-container {
    flex-wrap: wrap;
    margin-right: var(--dl-space-space-twounits);
  }
  .hero-image {
    width: var(--dl-size-size-xxlarge);
    margin-right: 0px;
    padding-right: 0px;
  }
}
@media(max-width: 991px) {
  .hero-hero {
    flex-direction: column;
  }
  .hero-container {
    flex-wrap: wrap;
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
  .hero-image {
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .hero-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .hero-container {
    flex-wrap: wrap;
  }
  .hero-text3 {
    color: var(--dl-color-gray-white);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .hero-image {
    width: var(--dl-size-size-xxlarge);
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
  .hero-container {
    flex-wrap: wrap;
    margin-bottom: var(--dl-space-space-unit);
  }
  .hero-text3 {
    color: var(--dl-color-gray-white);
  }
}
</style>
