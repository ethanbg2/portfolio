<template>
    <div class="list-item-container" v-bind:class="rootClassName">
      <div class="list-item-container1">
        <ul>
          <li>
            <span class="list-item-text">{{ text }}</span>

          </li>
        </ul>
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
  }

  ul {
    color: var(--dl-color-gray-white); /* Set the color of the bullet points */
    font-size: 16px; /* Set the size of the bullet points */
    margin-left: var(--dl-space-space-halfunit);
  }
  
  
  
  
  </style>
  