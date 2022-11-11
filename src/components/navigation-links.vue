<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <router-link to="/projects" class="navigation-links-navlink">
      {{ text }}
    </router-link>
    <span class="navigation-links-text">{{ text1 }}</span>
    <span class="navigation-links-text1">{{ text2 }}</span>
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
.navigation-links-navlink {
  color: var(--dl-color-gray-white);
  text-decoration: none;
}
.navigation-links-text {
  color: var(--dl-color-gray-white);
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text1 {
  color: var(--dl-color-gray-white);
  margin-left: var(--dl-space-space-twounits);
}

@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-navlink {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>