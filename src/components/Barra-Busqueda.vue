<template>
  <div class="buscar">
    <i class="icono fa-solid fa-magnifying-glass"></i>
    <input type="search" id="search" placeholder="Buscar candidato...">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .icono {
    margin: 0 14px;
    color: white;
  }

  .buscar{
    display: flex;
    background-color: #DADADA;
    border-radius: 20px;
    width: 421px;
    height: 36px;
    align-items: center;
  }
  .buscar input {
    border: 0;
    background-color: #DADADA;
    width: 255px;
  }
</style>