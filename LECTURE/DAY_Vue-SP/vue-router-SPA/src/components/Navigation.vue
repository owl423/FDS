<template>
  <nav class="gnb">
    <ul>
      <router-link to="/" tag="li" active-class="current-page" exact><a href>Home</a></router-link>
      <router-link to="/user" tag="li" active-class="current-page"><a href>User</a></router-link>
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
