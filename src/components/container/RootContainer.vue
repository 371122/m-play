<template>
  <div class="root-container" :style="style" v-droppable>
      <!-- todo:动态渲染children -->
  </div>
</template>

<script>
export default {
    name:"RootContainer",

    props:{
        widget: Object,
    },
    computed:{
        style(){
            return this.widget.attrs.style
        }
    },
    methods:{
        handleDrop(widget){
            const parentId = 'root'
            console.log('root', widget)
            this.$emit('add-child', parentId,  widget)
        }
    }

}
</script>

<style lang="scss">
.root-container{
    transition: all 300ms ease-out;
}
.drag-over, .drag-over2{
    background-color: rgb(255, 206, 206) !important;
}
</style>