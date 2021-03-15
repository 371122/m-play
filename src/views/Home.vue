<template>
  <div class="home">
    <ComponentMarket />
    <Sketch :schema="schema" />
  </div>
</template>

<script>
// @ is an alias to /src
import { schema } from '@/mock/schema'
import Sketch from '@/components/Sketch'
import ComponentMarket from '@/components/market/ComponentMarket'

export default {
  name: "Home",
  components: {
    Sketch,
    ComponentMarket,
  },
  data(){
    return {
      schema
    }
  }
};
</script>
