<template>
  <div id="app">
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defensesData: [],
      defenses: [],
      fetching: false,
      order: "Ordem",
      nome: "",
      curso: "Todos",
      programa: "Todos",
    };
  },
}
</script>

<style>
#app {
  /* border: solid 2px pink; */

  height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>
