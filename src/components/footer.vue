<template>
  <footer class="footer-footer">
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.footer-icon-group {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.footer-icon {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.footer-icon2 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.footer-icon4 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 767px) {
  .footer-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
}
</style>
