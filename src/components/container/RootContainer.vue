<template>
  <div class="root-container" :style="style" v-droppable>
      <!-- todo:动态渲染children -->
      <template v-for="cmp in widget.children">
        <component :is="cmp.tag" v-bind="getProps(cmp)" :key="cmp.componentId"/>
      </template>
  </div>
</template>

<script>
import BaseContainer from './BaseContainer'
import FlexContainer from './FlexContainer'
import emitter from '../../util/emitter'

export default {
    name:"RootContainer",

    components: {
        FlexContainer
    },

    mixins: [BaseContainer, emitter],

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
            this.dispatch('sketch', 'astChange', { parentId,  widget, type: 'add' })
        },
        getProps(cmp) {
            return {widget: cmp, ...cmp.attrs} || {}
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