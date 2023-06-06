<template>
  <button type="button" class="app-button" @click="$emit('click', $event)">
    <slot>{{ value ? value : "Botão" }}</slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-button {
  cursor: pointer;
  background-color: #F6F6F6;
  padding: 5px 10px;
  border: solid 1px transparent;
  border-radius: 20px;
  box-shadow: 0 2px 20px #1e1e1e10;
  transition: .3s;

  &:hover {
    background-color: #DDE5F1;
    border-color: #B8C3D4;
  }

  &.selected {
    background-color: #647B98;
    color: #DDE5F1;
  }
}
</style>