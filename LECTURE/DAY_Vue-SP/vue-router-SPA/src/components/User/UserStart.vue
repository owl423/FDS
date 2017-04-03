<template>
  <div class="column is-5">
    <h3 class="select-user-title title is-3 is-offset-2">Select User</h3>
    <nav class="menu">
      <ul class="menu-list">
        <router-link tag="li" to="/user/1"><a href>User 1</a></router-link>
        <router-link tag="li" to="/user/2"><a href>User 2</a></router-link>
        <router-link tag="li" to="/user/3"><a href>User 3</a></router-link>
      </ul>
    </nav>
  </div>
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
