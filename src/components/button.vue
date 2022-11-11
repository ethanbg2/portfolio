<template>
  <div class="button-container" v-bind:class="rootClassName">
    <button class="button-button button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.button-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.button-button {
  color: var(--dl-color-gray-white);
  width: var(--dl-size-size-large);
  height: var(--dl-size-size-small);
  font-style: normal;
  transition: 0.3s;
  font-weight: 700;
  border-style: hidden;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: var(--dl-color-darkmode-4);
}
.button-button:hover {
  color: var(--dl-color-darkmode-base);
  background-color: var(--dl-color-gray-white);
}

.button-root-class-name1 {
  align-self: flex-start;
}
@media(max-width: 991px) {
  .button-root-class-name1 {
    align-self: center;
  }
}
@media(max-width: 767px) {
  .button-root-class-name1 {
    align-self: center;
  }
}
@media(max-width: 479px) {
  .button-root-class-name1 {
    align-self: center;
  }
}
</style>
