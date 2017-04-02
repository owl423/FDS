<template>
  <div>
    <h2>User Page</h2>
    <p>Parameter ID: {{ id }}</p>
    <app-user-link>Go to Home</app-user-link>
    <ul>
      <li>Lorem ipsum.</li>
      <li>Voluptatem, soluta!</li>
      <li>Odit, consectetur!</li>
    </ul>
  </div>
</template>

<script>
  import UserLink from './UserLink.vue'
  export default {
    components: {
      appUserLink: UserLink
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id;
      }
    },
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style lang="sass">

</style>
