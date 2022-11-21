<template>
    <div class="info-info">
      <svg viewBox="0 0 1024 1024" class="info-icon">
        <path
          d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"
        ></path>
      </svg>
      <span class="info-text">{{ text }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Info',
    props: {
      text: {
        type: String,
        default: 'a;lskdjf;alksjdf;laksdjf;lkajsd;flkjasldfkj',
      },
    },
  }
  </script>
  
  <style scoped>
  .info-info {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    align-items: flex-start;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-halfunit);
    justify-content: flex-start;
    background-color: var(--dl-color-gray-white);
  }
  .info-icon {
    fill: var(--dl-color-gray-black);
    width: 24px;
    height: 24px;
    align-self: center;
    margin-left: var(--dl-space-space-halfunit);
  }
  .info-text {
    color: var(--dl-color-gray-black);
    padding: 0px;
    align-self: center;
    margin-left: var(--dl-space-space-halfunit);
    padding-top: var(--dl-space-space-halfunit);
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  @media(max-width: 479px) {
    .info-info {
      width: auto;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
    }
    .info-text {
      width: auto;
    }
  }
  </style>
  