<template>
  <div id="app">
    <app-header />

    <main>
      <search-and-filters :order="order" @set-order="setOrder" :nome="nome" @set-nome="setNome" :curso="curso"
        @set-curso="setCurso" :programa="programa" @set-programa="setPrograma" />

      <defenses-list :defenses="processedDefenses" />
    </main>
  </div>
</template>

<script>
import compare from './functions/compare.js'

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
  computed: {
    processedDefenses() {
      let processedDefenses = this.defenses;

      // FILTRO - Nome
      // Easter egg quando filtra pelo nome "ades" rs
      if (this.nome?.toLowerCase() == 'ades') {
        processedDefenses = processedDefenses.filter(defense => defense?.Nome == "Adenilso da Silva Simão");
        processedDefenses.forEach((defense, index) => {
          processedDefenses[index].Nome = `${processedDefenses[index].Nome} 😁💙`;
        });
      } else if (this.nome) processedDefenses = processedDefenses.filter(defense => defense?.Nome?.toLowerCase().match(this.nome.toLowerCase()));
      
      // FILTRO - Curso
      if (this.curso != "Todos") processedDefenses = processedDefenses.filter(defense => defense?.Curso == this.curso);
      
      // FILTRO - Programa
      if (this.programa != "Todos") processedDefenses = processedDefenses.filter(defense => defense?.Programa == this.programa);
      
      // Ordenação
      if (this.order != "Ordem") processedDefenses.sort((a, b) => compare(a[this.order], b[this.order]));

      return processedDefenses;
    },
  },
  methods: {
    async fetchDefenses() {
      this.fetching = true;
      const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
      await fetch(url)
        .then((data) => (data.json()))
        .then((response) => {
          response?.items?.sort((a, b) => compare(a['Ordem'], b['Ordem']));

          this.defensesData = response;
          this.defenses = response?.items;
          console.log(response);
        })
        .finally(() => {
          this.fetching = false;
        });
    },
    setOrder(value) {
      this.order = value;
    },
    setCurso(value) {
      this.curso = value;
    },
    setPrograma(value) {
      this.programa = value;
    },
    setNome(value) {
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
