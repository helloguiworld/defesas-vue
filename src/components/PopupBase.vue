<template>
  <div :class="popupClass">
    <div class="popup-content">
      <button class="close-button" type="button" @click="$emit('set-visibility', false)">
        <font-awesome-icon icon="fa-xmark" />
      </button>

      <slot>
        <p>Popup</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visibility'],
  data() {
    return {
      popupClass: 'popup-container hidden',
    };
  },
  watch: {
    visibility(visible) {
      this.popupClass = `popup-container${visible ? '' : ' hidden'}`;
    }
  },
}
</script>

<style lang="scss" scoped>
.popup-container {
  // border: 1px solid red;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(235, 239, 250, 0.2);
  backdrop-filter: blur(4px);
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  .popup-content {
    position: relative;
    flex: 1;
    max-width: 500px;
    max-height: 600px;
    padding: 15px;
    background-color: #F8FAFF;
    border: solid 1px transparent;
    border-radius: 10px;
    box-shadow: 0 2px 20px #1e1e1e10;
    overflow-x: hidden;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .close-button {
      cursor: pointer;
      position: absolute;
      right: 15px;
      width: 30px;
      height: 30px;
      font-size: 18px;
      background-color: #C62424;
      color: #FFFFFF;
      border: none;
      border-radius: 5px;
      box-shadow: 0 2px 20px #1e1e1e10;
      transition: .3s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #9b1919;
      }
    }
  }
}
</style>