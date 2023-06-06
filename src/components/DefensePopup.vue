<template>
  <popup-base class="defense-popup" :visibility="visibility" @set-visibility="$emit('set-visibility', $event)">
    <template v-if="defense">
      <p class="title"><strong>{{ defense.Nome }}</strong></p>
      <div>
        <p class="data"><strong>Ordem:</strong> {{ defense.Ordem }}</p>
        <p class="data"><strong>Curso:</strong> {{ switchCurso(defense.Curso) }}</p>
        <p class="data"><strong>Programa:</strong> {{ defense.Programa }}</p>
        <p class="data"><strong>Data:</strong> {{ defense.Data }}</p>
      </div>
    </template>
  </popup-base>
</template>

<script>
export default {
  props: ['defense', 'visibility'],
}
</script>

<style lang="scss" scoped>
.defense-popup {
  strong {
    font-weight: 500;
  }

  .title {
    font-size: 18px;
    padding-right: 40px;
  }

  .data {
    font-size: 14px;
  }
}
</style>