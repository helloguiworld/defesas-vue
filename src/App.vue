<template>
  <div id="app">
    <app-header />

    <main>
      <search-and-filters :nome="nome" @set-nome="setNome" :curso="curso" @set-curso="setCurso" :programa="programa"
        @set-programa="setPrograma" />

      <defenses-list :defenses="filteredDefenses" />
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
      nome: "",
      curso: "Todos",
      programa: "Todos",
    };
  },
  computed: {
    filteredDefenses() {
      return this.defenses
        .filter(defense => defense?.Nome?.toLowerCase().match(this.nome.toLowerCase()))
        .filter(defense => Number(defense?.Ordem) <= 10);
    }
  },
  methods: {
    async fetchDefenses() {
      this.fetching = true;
      const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
      await fetch(url)
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
    setCurso(value) {
      console.log("setCurso");
      this.curso = value;
    },
    setPrograma(value) {
      console.log("setPrograma");
      this.programa = value;
    },
    setNome(value) {
      console.log("setNome");
      this.nome = value;
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
