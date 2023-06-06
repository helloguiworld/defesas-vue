<template>
  <footer>
    <p class="title"><b>SSC0961 - Desenvolvimento Web e Mobile</b></p>

    <div>
      <p class="subtitle"><b>Docente:</b> Adenilso da Silva Simão</p>
      <p class="subtitle"><b>Estagiário PAE:</b> Rodrigo Henrique Ramos</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  background-color: #A7B4C5;
  padding: 10px;
  box-shadow: 0 -2px 20px #1e1e1e10;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px 20px;

  b {
    font-weight: 500;
  }

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 12px;
  }
}
</style>