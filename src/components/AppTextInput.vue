<template>
  <input class="app-text-input" :placeholder="placeholder ? placeholder : 'Digite aqui...'" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: ['placeholder', 'value']
}
</script>

<style>
.app-text-input {
  background-color: #fcfcfc;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
}
</style>