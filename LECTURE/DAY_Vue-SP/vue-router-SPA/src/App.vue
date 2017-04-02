<template>
  <div id="app" class="container">
    <h1><abbr title="Single Page Application">SPA</abbr></h1>
    <router-view name="gnb"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
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
