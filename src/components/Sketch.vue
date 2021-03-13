<template>
  <div id="sketch"></div>
</template>

<script>

import { shema } from '../mock/schema'
export default {
    name:"Sketch",
    
    data(){
        return {
            schema,
        }
    }
}
</script>

<style lang="scss">
#sketch{
    margin: 100px;
    background-color: white;
    border: 1px solid  gray;
}
</style>