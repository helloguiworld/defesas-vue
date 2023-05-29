<template>
  <div class="radio-button">
    <input type="radio" :id="id" :value="value" />
    <label :for="id">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: ['id', 'value']
}
</script>

<style>
.radio-button {
  /* background-color: palegoldenrod; */
  font-size: 13px;
  display: flex;
  /* align-items: center; */
  gap: 3px;
}
</style>