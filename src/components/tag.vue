Tag
Button
.button

<template>
  <div class="tag-container" v-bind:class="rootClassName">
    <button v-bind:class="{'tag-button button': !clicked, 'tag-button-clicked button': clicked}" v-on:click="clicked=!clicked">{{ button }} </button>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
  data() {
    return {
        clicked: false
    }
  }
}
</script>

<style scoped>
.tag-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  transition: 0.3s;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
}

.tag-button {
  color: var(--dl-color-primary-700);
  width: var(--dl-size-size-medium);
  align-self: center;
  transition: 0.3s;
  border-width: 0px;
  border-radius: 50px;
  background-color: rgba(133, 220, 255, 0.25);
}
.tag-button:hover {
  color: var(--dl-color-gray-white);
  background-color: rgba(133, 220, 255, 0.8);
}
.tag-button-clicked {
    width: var(--dl-size-size-medium);
    align-self: center;
    transition: 0.3s;
    border-width: 0px;
    border-radius: 50px;
    color: var(--dl-color-gray-white);
    background-color: rgba(133, 220, 255, 0.8);
}
</style>
