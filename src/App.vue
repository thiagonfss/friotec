<template>
  <div id="nav">
    <router-link to="/" exact>Início</router-link>
    <router-link to="/about" exact>Sobre nós</router-link>
    <router-link to="parceiros" exact>Principais parceiros</router-link>
    <router-link to="localizacao" exact>Localização</router-link>
    <router-link to="contato" exact>Contate-nos</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  background: #76708b;
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: white;
  background: #241654;
  cursor: initial;
}
</style>
