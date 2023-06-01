<template>
  <section id="defenses-list">
    <div class="defenses-list-header">
      <p class="defenses-list-title">Defesas</p>

      <p>{{ defenses.length }} {{ defenses.length != 1 ? "itens" : "item"}}</p>
    </div>

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

  display: flex;
  flex-direction: column;
  gap: 20px;
}
.defenses-list-header {
  /* background-color: pink; */
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.defenses-list-title {
  font-size: 18px;
  font-weight: 600;
}
</style>