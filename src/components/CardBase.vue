<template>
  <div class="card">
    <slot>
      <p class="title">card</p>
    </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  padding: 15px;
  background-color: #D7DCE3;
  border: solid 1px transparent;
  border-radius: 10px;
  box-shadow: 0 2px 20px #1e1e1e10;
  transition: .3s;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card:hover {
  border-color: #647B98;
}

.card-title {
  font-weight: 600;
}

.card-subtitle {
  font-weight: 500;
}

.card-section {
  /* border: solid 1px pink; */
  background-color: #ECECEC;
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card-line {
  display: flex;
  flex-flow: wrap;
  gap: 10px;
}
</style>