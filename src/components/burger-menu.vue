<template>
  <div data-role="BurgerMenu" class="burger-menu-burger-menu">
    <svg viewBox="0 0 1024 1024" class="burger-menu-icon">
      <path
        d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {},
}
</script>

<style scoped>
.burger-menu-burger-menu {
  display: none;
  position: relative;
}
.burger-menu-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: flex;
}
@media(max-width: 767px) {
  .burger-menu-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .burger-menu-icon {
    fill: var(--dl-color-gray-white);
    width: 30px;
    height: 30px;
  }
}
@media(max-width: 479px) {
  .burger-menu-icon {
    fill: var(--dl-color-gray-white);
    width: 30px;
    height: 30px;
  }
}
</style>
