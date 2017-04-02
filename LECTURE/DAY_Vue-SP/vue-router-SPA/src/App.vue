<template>
  <div id="app" class="container">
    <h1><abbr title="Single Page Application">SPA</abbr></h1>
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
.container
  width: 940px
  margin:
    left: auto
    right: auto

.router-link-active,
.current-page a
  text-decoration: none
  font-weight: 900
  background: #303030
  color: #fff
</style>
