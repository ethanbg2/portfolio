Tag
Button
.button

<template>
  <div class="tag-container" v-bind:class="rootClassName">
    <router-link v-if="!clicked" :to="{name: 'Work', hash:'#projects'}">
      <button 
        v-bind:class="{'tag-button button': !clicked, 'tag-button-clicked button': clicked}" 
        v-on:click="onClick"
        >
          {{ button }} 
      </button>
    </router-link>
    <button v-else
        v-bind:class="{'tag-button button': !clicked, 'tag-button-clicked button': clicked}" 
        v-on:click="onClick"
        >
          {{ button }} 
    </button>
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
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked
      if (this.clicked) {
        this.$emit('clicked', this.button)
      } else {
        this.$emit('clicked', `!${this.button}`)
      }
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
  width: auto;
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
    width: auto;
    align-self: center;
    transition: 0.3s;
    border-width: 0px;
    border-radius: 50px;
    color: var(--dl-color-gray-white);
    background-color: rgba(133, 220, 255, 0.8);
}
</style>
