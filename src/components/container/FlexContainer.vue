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
export default {
    name:"FlexContainer",
    mixins: [BaseContainer],
    
    props:{
        widget: Object,
    },
    data(){
        return {}
    },
    computed:{
        style(){
            return this.widget.attrs.style
        }
    },

    methods:{
        handleDrop(widget){
            const parentId = this.widget.id
            const index = this.widget.children.length
            this.dispatch('sketch', 'astChange',{ parentId,  widget, type: 'add',  index })
        },
        getProps(cmp) {
            return {widget: cmp, ...cmp.attrs} || {}
        }
    }
}
</script>

<style>

</style>