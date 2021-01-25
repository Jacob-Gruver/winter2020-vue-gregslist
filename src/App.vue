<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
      <router-link :to="{ name: 'Cars' }" class="nav-item nav-link active">
        Gregslist
      </router-link>
      <!-- <router-link class="nav-item nav-link" :to="{ name: 'About' }">
        About
      </router-link> -->
    </div>
  </nav>
  <!-- NOTE Router-View allows the Router to determine which component gets loaded -->
  <router-view />
  <footer class="container-fluid bg-dark text-light">
    <div class="row">
      <div class="col p-5 text-center">
        <p>Made with ♥ by CodeWorks</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import 'bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
