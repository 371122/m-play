<template>
  <div class="widget-item" :style="style">
      <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
        widget
    },
    computed:{
        style(){
            return this.widget.style
        }
    }
})
</script>

<style>

</style>