<template>
  <nav class="gnb menu">
    <h3 class="menu-label">Global Navigation</h3>
    <ul class="menu-list">
      <!-- <router-link to="/" tag="li" active-class="current-page" exact><a href>Home</a></router-link> -->
      <!-- <router-link to="/user" tag="li" active-class="current-page"><a href>User</a></router-link> -->
      <li><router-link to="/" active-class="is-active" exact>Home</router-link></li>
      <li><router-link to="/user" active-class="is-active">User</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
