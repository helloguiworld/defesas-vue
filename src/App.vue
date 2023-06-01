<template>
  <div id="app">
    <app-header />

    <main>
      <search-and-filters />

      <defenses-list :defenses="defenses"/>
    </main>
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
    };
  },
  methods: {
    async fetchDefenses() {
      this.fetching = true;
      const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
      fetch(url)
        .then((data) => (data.json()))
        .then((response) => {
          this.defensesData = response;
          this.defenses = response?.items;
          console.log(response);
        })
        .finally(() => {
          this.fetching = false;
        });
    },
  },
  mounted() {
    this.fetchDefenses();
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

main {
  /* border: solid 2px red; */
  
  overflow: hidden;
  flex: 1;
  display: flex;
}
</style>
