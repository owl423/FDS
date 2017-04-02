<template>
  <div>
    <h3>Selected User Detail Information</h3>
    <p>Selected User ID {{ $route.params.id }}</p>
    <!-- <router-link
      tag="button"
      type="button"
      :to="`/user/${$route.params.id}/edit`">Edit</router-link> -->
    <router-link
          tag="button"
          type="button"
          :to="{
            name: 'userEdit',
            params: { id: $route.params.id },
            query: { locale: 'ko', amount: 100 } }">Edit</router-link>
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
