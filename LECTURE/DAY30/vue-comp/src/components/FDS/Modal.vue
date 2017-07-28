<template lang="pug">
  //- transition(
  //-   :duration="300"
  //-   enter-active-class="animated zoomInUp"
  //-   leave-active-class="animated zoomOutDown"
  //- )
  transition(
    @before-enter="onBeforeEnter"
    @before-leave="onLeave"
    :css="false"
  )
    .modal(v-if="visible" class="is-active")
      .modal-background(@click="closeModal")
      .modal-content.box
        slot
          p Default Model Content.
      button.modal-close.is-large(
        @click="closeModal"
        :aria-label="close_message"
      )
</template>

<script>
let Velocity = global.Velocity;

export default {
  props: {
    close_message: {
      type: String,
      default: 'Close Modal'
    },
    is_visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.is_visible
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    onBeforeEnter(el){

    },
    onEnter(el, done){

    },
    onLeave(el, done){

    }
  }
}
</script>
