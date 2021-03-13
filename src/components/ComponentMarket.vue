<template>
  <div class="component-market">
    <ul class="component-list">
      <li class="component-item" v-for="cmp in components" :key="cmp.id" v-draggable="cmp">
        {{ cmp.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { components } from "../mock/componentList";
export default {
  name: "ComponentMarket",

  data() {
    return {
      components: components,
    };
  },
};
</script>

<style lang="scss">
.component-list {
  width: 100%;
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