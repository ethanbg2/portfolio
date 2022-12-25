<template>
    <div class="list-item-container" v-bind:class="rootClassName">
      <div class="list-item-container1">
        <svg viewBox="0 0 877.7142857142857 1024" class="list-item-icon">
          <path
            d="M585.143 512c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM658.286 512c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM731.429 512c0 161.714-130.857 292.571-292.571 292.571s-292.571-130.857-292.571-292.571 130.857-292.571 292.571-292.571 292.571 130.857 292.571 292.571zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
          ></path>
        </svg>
        <span class="list-item-text">{{ text }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListItem',
    props: {
      text: {
        type: String,
        default:
          'list item',
      },
      rootClassName: String,
    },
  }
  </script>
  
  <style scoped>
  .list-item-container {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
    margin-bottom: var(--dl-space-space-halfunit);
    flex-direction: column;
  }
  .list-item-container1 {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
  }
  .list-item-icon {
    fill: var(--dl-color-gray-white);
    width: var(--dl-size-size-xsmall);
    height: var(--dl-size-size-xsmall);
    align-self: center;
  }
  .list-item-text {
    color: var(--dl-color-gray-white);
    align-self: center;
    margin-left: var(--dl-space-space-halfunit);
  }
  
  
  
  
  </style>
  