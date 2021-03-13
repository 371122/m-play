<template>
  <div id="sketch" v-droppable>
      <component :is="tag" :widget="widget"></component>
  </div>
</template>

<script>
import Block from './block/Block'
import FlexContainer from './container/FlexContainer'
import RootContainer from './container/RootContainer'
export default {
    name:"Sketch",

    components:{
        Block,
        FlexContainer,
        RootContainer
    },

    props:{
        widget:Object
    },
    
    data(){
        return {
        }
    },
    computed:{
        tag(){
            return this.widget.tag
        }

    }
}
</script>

<style lang="scss">
#sketch{
    margin-top: 100px;
    margin-left: 20px;
    height: 800px;
    background-color: white;
    border: 1px solid  gray;
}
</style>