<template>
  <div id="home-view">
    <h2>Olá! 😄</h2>

    <div class="title-group">
      <h4>Bem vindo ao</h4>
      <h1>Portal de Consulta de Defesas</h1>
    </div>

    <router-link to="/defesas">Acesar Defesas</router-link>

    <div class="group-info">
      <p class="title">Feito por:</p>
      <p class="member">Guilherme Filipe Feitosa dos Santos - 11275092</p>
      <p class="member">Marina Nastri da Costa Pereira Rodero - 10093702</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style lang="scss" scoped>
#home-view {
  flex: 1;
  text-align: center;
  background-color: #ECECEC;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .title-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-weight: 500;
    }
  }

  .group-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-weight: 500;
    }

    .member {
      font-size: 14px;
    }
  }
}
</style>