<template>
  <aside id="search-and-filters">
    <!-- Card 1 - Ordenação -->
    <card-base>
      <p class="card-title">Ordenar por:</p>
      <div class="card-line">
        <!-- v-for orders -->
        <app-button v-for="item in orders" :key="item" :class="order == item ? 'selected' : ''"
          @click="$emit('set-order', item)">
          {{ item }}
        </app-button>
      </div>
    </card-base>

    <!-- Card 2 - Filtragem -->
    <card-base>
      <p class="card-title">Filtrar por:</p>

      <div class="card-section">
        <p class="card-subtitle">Nome ({{ nome ? nome.toLowerCase() : '*' }})</p>
        <app-text-input placeholder="Ex.: Alana..." :value="nome" @input="$emit('set-nome', $event)" />
      </div>

      <div class="card-section">
        <p class="card-subtitle">Curso ({{ curso }})</p>
        <div class="card-line">
          <!-- v-for cursos -->
          <app-radio-button v-for="item in cursos" :key="item" name="curso" :id="`curso-${item.toLowerCase()}`"
            :value="item" :label="switchCurso(item)" :checked="item == 'Todos' ? true : false"
            @click="$emit('set-curso', $event)" />
        </div>
      </div>

      <div class="card-section">
        <p class="card-subtitle">Programa ({{ programa }})</p>
        <div class="card-line">
          <!-- v-for programas -->
          <app-radio-button v-for="item in programas" :key="item" name="programa" :id="`programa-${item.toLowerCase()}`"
            :value="item" :checked="item == 'Todos' ? true : false" @click="$emit('set-programa', $event)" />
        </div>
      </div>
    </card-base>
  </aside>
</template>

<script>
export default {
  props: ['order', 'nome', 'curso', 'programa'],
  data() {
    return {
      orders: ['Ordem', 'Nome', 'Data', 'Curso', 'Programa'],
      cursos: ['Todos', 'ME', 'DO', 'DD'],
      programas: ['Todos', 'MAT', 'CCMC', 'PROFMAT', 'PIPGEs', 'MECAI'],
    }
  },
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