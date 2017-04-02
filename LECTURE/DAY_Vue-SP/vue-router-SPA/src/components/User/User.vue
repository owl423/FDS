<template>
    <div>
      <h2>User Page</h2>
      <button type="button" @click="gotoHomeComponent">Go to Home</button>
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
