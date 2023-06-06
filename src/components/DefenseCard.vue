<template>
  <card-base class="defense-card" @click="$emit('set-defense', defense)">
    <div class="card-data-flex-2">
      <p class="title"><strong>{{ defense.Nome }}</strong></p>
      <p><strong>Ordem:</strong> {{ defense.Ordem }}</p>
    </div>
    <p class="card-data-flex-1"><strong>Curso:</strong> {{ switchCurso(defense.Curso) }}</p>
    <p class="card-data-flex-1"><strong>Programa:</strong> {{ defense.Programa }}</p>
    <p class="card-data-flex-1"><strong>Data:</strong> {{ defense.Data }}</p>
  </card-base>
</template>

<script>
export default {
  props: ['defense']
}
</script>

<style lang="scss" scoped>
.defense-card {
  cursor: pointer;
  font-size: 14px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .card-data-flex-1 {
    flex: 1;
  }

  .card-data-flex-2 {
    flex: 2;
  }

  .title {
    font-size: 15px;
  }

  strong {
    font-weight: 500;
  }
}
</style>