<template>
    <div class="columns">
      <div class="column is-3">
        <h2 class="title is-2">User Page</h2>
        <button type="button" class="button is-warning" @click="gotoHomeComponent">Go to Home</button>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  export default {
    methods: {
      gotoHomeComponent() {
        this.$router.push({ name: 'home' });
      }
    }
  }
</script>

<style lang="sass">

</style>
