<template>
  <div class="radio-button">
    <input type="radio" :name="name" :id="id" :value="value" :checked="checked" @click="$emit('click', value)"/>
    <label :for="id">{{ label ? label : value }}</label>
  </div>
</template>

<script>
export default {
  props: ['name', 'id', 'value', 'label', 'checked']
}
</script>

<style>
.radio-button {
  font-size: 13px;
  display: flex;
  gap: 3px;
}
</style>