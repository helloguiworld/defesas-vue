<template>
  <aside id="search-and-filters">
    <!-- Card 1 - Ordenação -->
    <card-base>
      <p class="card-title">Ordenar por:</p>
      <div class="card-line">
        <app-button>Ordem</app-button>
        <app-button>Nome</app-button>
        <app-button>Data</app-button>
        <app-button>Curso</app-button>
        <app-button>Programa</app-button>
      </div>
    </card-base>

    <!-- Card 2 - Filtragem -->
    <card-base>
      <p class="card-title">Filtrar por:</p>

      <div class="card-section">
        <p class="card-subtitle">Nome</p>
        <app-text-input placeholder="Ex.: Alana..." />
      </div>

      <div class="card-section">
        <p class="card-title">Curso</p>
        <div class="card-line">
            <app-radio-button id="curso-todos" value="Todos"/>
            <app-radio-button id="curso-mestrado" value="Mestrado"/>
            <app-radio-button id="curso-doutorado" value="Doutorado"/>
        </div>
      </div>

      <div class="card-section">
        <p class="card-title">Programa</p>
        <div class="card-line">
            <app-radio-button id="programa-todos" value="Todos"/>
            <app-radio-button id="programa-mat" value="MAT"/>
            <app-radio-button id="programa-ccmc" value="CCMC"/>
            <app-radio-button id="programa-profmat" value="PROFMAT"/>
            <app-radio-button id="programa-pipges" value="PIPGEs"/>
            <app-radio-button id="programa-mecai" value="MECAI"/>
        </div>
      </div>
    </card-base>
  </aside>
</template>

<script>
export default {

}
</script>

<style>
#search-and-filters {
  /* border: solid 2px green; */
  flex: 1;
  overflow-y: auto;
  max-width: 350px;
  background-color: #B8C3D4;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>