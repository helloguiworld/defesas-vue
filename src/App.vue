<template>
  <div id="app">
    <app-header />

    <main>
      <search-and-filters/>

      <defenses-list/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
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

  flex: 1;
  display: flex;
}
</style>
