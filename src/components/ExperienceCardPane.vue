<template>
    <div class="experience-card-pane-container" v-bind:class="rootClassName">
      <div class="experience-card-pane-container1">
        <ExperienceCard v-for="item in experiences" 
        :company="item.company" 
        :date="item.date" 
        :position="item.position">
        </ExperienceCard>
    </div>
  </div>
</template>

<script>
  import ExperienceCard from './ExperienceCard'

export default {
    name: 'ExperienceCardPane',
  props: {
    rootClassName: String,
    experiences: Array
  },
  components: {
    ExperienceCard,
  },
}
</script>

<style scoped>
.experience-pane-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
}
.experience-pane-container1 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
}

@media(max-width: 479px) {
  .experience-pane-container {
    width: 100%;
    max-width: var(--dl-size-size-maxwidth);
  }
  .experience-pane-container1 {
    width: 100%;
    align-self: center;
  }
}
</style>
