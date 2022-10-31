<template>
  <header>
    <img src="@/assets/bbva-logo.png" alt="logo" class="espacio">
    <div class="iconos">
      <button id="bell-button"><i class="fa-solid fa-bell fa-2x"></i></button>
      <button id="bars-button"><i class="fa-solid fa-bars fa-2x"></i></button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  background: #006ec1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: auto;
}

button {
  background-color: #006ec1;
  border: none;
  color: white;
}

#bars-button {
  display: none;
}

.espacio{
  margin-left: 40px;
}

.iconos{
  display: flex;
}

@media (max-width: 600px) {
  .iconos{
    display: flex;
  }
  
  #bars-button {
    display: block;
  }
}

@media (max-width:1000px) {
  #bars-button{
    display: block;
  }
}

</style>