<template>
  <div class="column is-5 is-offset-1">
    <h3 class="subtitle is-4">Selected User Edit Mode</h3>
    <div class="box">
      <p>Locale: {{ $route.query.locale }}</p>
      <p>Amount: {{ $route.query.amount }}</p>
    </div>
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
