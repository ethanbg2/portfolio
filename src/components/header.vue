<template>
  <header data-role="Header" class="header-header">
    <app-logo rootClassName="logo-root-class-name"></app-logo>
    <div class="header-nav">
      <navigation-links rootClassName="rootClassName17"></navigation-links>
    </div >
    <burger-menu> </burger-menu>
  </header>
</template>

<script>
import AppLogo from './logo'
import NavigationLinks from './navigation-links'
import BurgerMenu from './burger-menu'

export default {
  name: 'Header',
  props: {
    image_src: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
  components: {
    AppLogo,
    NavigationLinks,
    BurgerMenu,
  }
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.header-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.header-image {
  height: 2rem;
}
.header-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.header-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon4 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon6 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 767px) {
  .header-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .header-nav {
    display: none;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
