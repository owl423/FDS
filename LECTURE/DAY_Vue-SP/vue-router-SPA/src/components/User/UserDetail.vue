<template>
  <div class="column is-5 is-offset-1">
    <h3 class="title is-3">Selected User Detail Information</h3>
    <div class="box">
      <h4 class="subtitle is-4">
        <span class="icon">
          <i class="fa fa-angle-right"></i>
        </span>
        Selected User ID <span class="tag-id">{{ $route.params.id }}</span>
      </h4>
      <p class="image">
        <img :src="random_people" alt="people" width="200" height="200">
      </p>
    </div>
    <router-link
      tag="button"
      type="button"
      class="button is-danger"
      :to="link">
      Edit
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: { id: this.$route.params.id },
          query: { locale: 'ko', amount: 100 }
        },
        random_people: 'https://source.unsplash.com/category/people/200x200'
      }
    }
  }
</script>

<style>
  .tag-id {
    margin-left: 0.4em;
    padding: 0.1em 0.6em;
    background: #eee;
    border-radius: 4px;
    line-height: 1;
  }
</style>
