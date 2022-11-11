<template>
  <div class="logo-container" v-bind:class="rootClassName">
    <router-link to="/" class="logo-navlink">
      <div class="logo-container1">
        <svg viewBox="0 0 1097.142857142857 1024" class="logo-icon">
          <path
            d="M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z"
          ></path>
        </svg>
        <span class="logo-text">
          <span>Ethan Grinberg</span>
          <br />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'Text',
    },
  },
}
</script>

<style scoped>
.logo-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.logo-navlink {
  display: contents;
}
.logo-container1 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: center;
  text-decoration: none;
}
.logo-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-right: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
}
.logo-text {
  color: var(--dl-color-gray-white);
  font-size: 24px;
  align-self: center;
  font-style: normal;
  font-weight: 700;
}

</style>
