<template>
  <div id="sketch" v-droppable>
      <component :is="tag" :widget="widget" @add-child="handleAdd"></component>
  </div>
</template>

<script>
import Block from './block/Block'
import FlexContainer from './container/FlexContainer'
import RootContainer from './container/RootContainer'

import { find } from '../util/schema'

export default {
    name:"Sketch",

    componentName: "sketch",

    components:{
        Block,
        FlexContainer,
        RootContainer,
    },

    props:{
        schema: Object
    },
    
    data(){
        return {
            widget: this.schema
        }
    },
    computed:{
        tag(){
            return this.widget.tag
        }
    },
    created(){
        this.$on("astChange", ({widget, type, parentId, index}) => {
            console.log('astChange', parentId,  type ,widget)
            if(type === 'add') {
                const { component } = find(this.widget, parentId)
                component.children.push(widget)
            }
        })
    },
    methods:{
        /**
         * todo:使用splice改写
         * 参数添加index，从某处插入子元素s
         */
        handleAdd(parentId, widget){
            this.widget.children.push(widget)
            console.log(parentId, widget)
            // const parent = this.widget.children.find(child => {
            //     return child.id === parentId;
            // })
            // console.log('parent', parent)
            // parent.children.push(widget)
        }
    }
}
</script>

<style lang="scss">
#sketch{
    margin-left: 20px;
    height: 800px;
    background-color: white;
    border: 1px solid  rgb(194, 194, 194);
}
</style>