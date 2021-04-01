<template>
  <div class="component-market">
      <DragElement  class="component-item" v-for="cmp in components" :key="cmp.id" :cmp="cmp"/>
  </div>
</template>

<script>
import { components } from "../../mock/componentList";
import DragElement from "./DragElement"
export default {
  name: "ComponentMarket",

  components:{
    DragElement
  },

  data() {
    return {
      components: components,
    };
  },
};
</script>

<style lang="scss">
.component-market {
  width: 300px;
  list-style: none;
  display: flex;

  .component-item {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    background-color: #e4e4e4;
  }
}
</style>