<template>
  <div id="app" class="container">

    <div class="columns is-desktop">

      <div class="column is-2">
        <h1 class="title is-1">
          <abbr title="Single Page Application">{{ app_name }}</abbr>
        </h1>
        <router-view name="gnb"></router-view>
      </div>

      <div class="column is-8 is-offset-1">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      app_name: 'SPA'
    }
  }
}
</script>

<style lang="sass">
@import '~bulma/bulma'

#app
  margin-top: 5rem
  font-family: "Spoqa Han Sans"

.router-link-active,
.current-page a
  text-decoration: none
  font-weight: 900
  background: #303030
  color: #fff

// fade animation
// enter - enter-active
// leave - leave-active
.fade-enter-active
  animation: fade-in 0.4s
.fade-leave-active
  animation: fade-out 0.4s

@keyframes fade-in
  from

  to
    opacity: 1
@keyframes fade-out
  from

  to
    opacity: 0

// slide animation
.slide-enter
  opacity: 0
.slide-enter-active
  animation: slide-in 0.4s
.slide-leave
  opacity: 1
.slide-leave-active
  animation: slide-out 0.4s

@keyframes slide-in
  from
    transform: translateX(-200px)
  to
    transform: translateX(0px)
    opacity: 1

@keyframes slide-out
  from
    transform: translateX(0px)
  to
    transform: translateX(200px)
    opacity: 0
</style>
