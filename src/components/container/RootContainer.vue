<template>
  <div class="root-container" :style="style" v-droppable @drop="handleDrop">

  </div>
</template>

<script>
export default {
    name:"RootContainer",

    props:{
        widget:Object,
    },
    computed:{
        style(){
            return this.widget.attrs.style
        }
    },
    methods:{
        handleDrop(e){
            e.target.classList.add('drag-over2')
        }
    }

}
</script>

<style lang="scss">
.root-container{
    transition: all 300ms ease-in;
}
.drag-over, .drag-over2{
    background-color: rgb(255, 206, 206);
}
</style>