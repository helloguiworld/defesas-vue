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
        <p class="card-subtitle">Nome ({{ nome ? nome.toLowerCase() : '*' }})</p>
        <app-text-input placeholder="Ex.: Alana..." :value="nome" @input="$emit('set-nome', $event)"/>
      </div>

      <div class="card-section">
        <p class="card-subtitle">Curso ({{ curso }})</p>
        <div class="card-line">
          <app-radio-button name="curso" id="curso-todos" value="Todos" checked=true @click="$emit('set-curso', $event)" />
          <app-radio-button name="curso" id="curso-mestrado" value="ME" label="Mestrado" @click="$emit('set-curso', $event)" />
          <app-radio-button name="curso" id="curso-doutorado" value="DO" label="Doutorado" @click="$emit('set-curso', $event)" />
        </div>
      </div>

      <div class="card-section">
        <p class="card-subtitle">Programa ({{ programa }})</p>
        <div class="card-line">
          <app-radio-button name="programa" id="programa-todos" value="Todos" checked=true @click="$emit('set-programa', $event)" />
          <app-radio-button name="programa" id="programa-mat" value="MAT" @click="$emit('set-programa', $event)" />
          <app-radio-button name="programa" id="programa-ccmc" value="CCMC" @click="$emit('set-programa', $event)" />
          <app-radio-button name="programa" id="programa-profmat" value="PROFMAT" @click="$emit('set-programa', $event)" />
          <app-radio-button name="programa" id="programa-pipges" value="PIPGEs" @click="$emit('set-programa', $event)" />
          <app-radio-button name="programa" id="programa-mecai" value="MECAI" @click="$emit('set-programa', $event)" />
        </div>
      </div>
    </card-base>
  </aside>
</template>

<script>
export default {
  props: ['nome', 'curso', 'programa'],
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