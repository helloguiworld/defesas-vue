<template>
  <section id="defenses-list">
    <p>lista ({{ defenses.length }})</p>
    <defense-card v-for="defense in defenses" :key="defense.Ordem" :defense="defense" />
  </section>
</template>

<script>
import DefenseCard from './DefenseCard.vue';

export default {
  props: ['defenses'],
  components: {
    DefenseCard,
  }
}
</script>

<style>
#defenses-list {
  /* border: solid 2px blue; */

  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>