<template>
  <div class="drag-element" v-draggable="cmp">
      {{cmp.name}}
  </div>
</template>

<script>
export default {
    name:"DragElement",

    props:{
        cmp: Object,
    },
    data(){
        return {

        }
    },
    methods:{

    }

}
</script>

<style>

</style>