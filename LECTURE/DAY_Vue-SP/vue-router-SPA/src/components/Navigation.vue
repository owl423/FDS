<template>
  <nav class="gnb">
    <ul>
      <!-- <li><router-link to="/" active-class="current-page" exact>Home</router-link></li> -->
      <!-- <li><router-link to="/user" active-class="current-page">User</router-link></li> -->
      <router-link to="/" tag="li" active-class="current-page" exact><a href>Home</a></router-link>
      <router-link to="/user/1" tag="li" active-class="current-page"><a href>User 1</a></router-link>
      <router-link to="/user/2" tag="li" active-class="current-page"><a href>User 2</a></router-link>
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
