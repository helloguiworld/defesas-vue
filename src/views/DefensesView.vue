<template>
  <div id="defenses-view">
    <div v-if="fetching" class="v-spinner-container">
      <fade-loader :loading="fetching" color="#B8C3D4" />
      <p>Acessando dados...</p>
    </div>
    <main v-else>
      <search-and-filters :order="order" @set-order="setOrder" :nome="nome" @set-nome="setNome" :curso="curso"
        @set-curso="setCurso" :programa="programa" @set-programa="setPrograma" />

      <defenses-list :defenses="processedDefenses" @set-defense="setDefensePopupData"/>

      <defense-popup :defense="defensePopupData" :visibility="defensePopupVisibility" @set-visibility="setDefensePopupVisibility"/>
    </main>
  </div>
</template>

<script>
import compare from '@/functions/compare.js'
import ISODate from '@/functions/ISODate.js'
import DefensePopup from '@/components/DefensePopup.vue';

export default {
  name: 'DefensesView',
  components: {
    DefensePopup,
  },
  data() {
    return {
      defensesData: [],
      defenses: [],
      fetching: false,
      order: "Ordem",
      nome: "",
      curso: "Todos",
      programa: "Todos",
      defensePopupData: undefined,
      defensePopupVisibility: false,
    };
  },
  computed: {
    processedDefenses() {
      let processedDefenses = this.defenses;

      // FILTROS
      // Nome
      // Easter egg quando busca pelo nome "ades" rs
      if (this.nome?.toLowerCase() == 'ades') processedDefenses = processedDefenses.filter(defense => defense?.Nome.match("Adenilso da Silva Simão"));
      else if (this.nome) processedDefenses = processedDefenses.filter(defense => defense?.Nome?.toLowerCase().match(this.nome.toLowerCase()));
      // Curso
      if (this.curso != "Todos") processedDefenses = processedDefenses.filter(defense => defense?.Curso == this.curso);
      // Programa
      if (this.programa != "Todos") processedDefenses = processedDefenses.filter(defense => defense?.Programa == this.programa);

      // ORDENAÇÃO
      // Ordem - Necessário transformar String em Number
      if (this.order == 'Ordem')
        processedDefenses.sort((a, b) => compare(Number(a['Ordem']), Number(b['Ordem'])));
      // Nome, Curso ou Programa
      else if (this.order == 'Nome' || this.order == 'Curso' || this.order == 'Programa')
        processedDefenses.sort((a, b) => {
          const result = compare(a[this.order], b[this.order]);
          if (result != 0) return result;
          // Desempate por 'Ordem' (único para cada defesa)
          else return compare(Number(a['Ordem']), Number(b['Ordem']));
        });
      // Data - Necessário formatar de dd/mm/aaaa para aaaa-mm-dd
      else if (this.order == 'Data')
        processedDefenses.sort((a, b) => {
          const result = compare(ISODate(a['Data']), ISODate(b['Data']));
          if (result != 0) return result;
          // Desempate por 'Ordem' (único para cada defesa)
          else return compare(Number(a['Ordem']), Number(b['Ordem']));
        });

      document.getElementById('defenses-list')?.scrollTo({ top: 0, behavior: 'smooth' });
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
          this.defensesData = response;
          this.defenses = response?.items;
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
    setDefensePopupData(value) {
      // console.log('setData', value);
      this.defensePopupData = value;
      this.setDefensePopupVisibility(true);
    },
    setDefensePopupVisibility(newVisibility) {
      // console.log('setVisibility', newVisibility);
      this.defensePopupVisibility = newVisibility;
    },
  },
  mounted() {
    this.fetchDefenses();
  },
}
</script>

<style>
#defenses-view {
  /* border: solid 2px pink; */

  /* height: 100vh; */
  flex: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

main {
  /* border: solid 2px red; */

  overflow: hidden;
  flex: 1;
  display: flex;
}

.v-spinner-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
</style>