<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <router-link :to="{name: 'Work'}" class="navigation-links-text">
      Work
    </router-link>
    <router-link :to="{name: 'Home'}" class="navigation-links-text1">
      About Me
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text1: {
      type: String,
      default: 'Experience',
    },
    text2: {
      type: String,
      default: 'About',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Work',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  text-decoration: none;
}
.navigation-links-text:hover {
  color: var(--dl-color-darkmode-4);
}
.navigation-links-text1 {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text1:hover {
  color: var(--dl-color-darkmode-4);
}

.navigation-links-text2:hover {
  color: var(--dl-color-darkmode-4);
}

@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
