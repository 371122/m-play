<template>
  <div class="home">
    <ComponentMarket />
    <Sketch :widget="schema" />
  </div>
</template>

<script>
// @ is an alias to /src
import { schema } from '@/mock/schema'
import Sketch from '@/components/Sketch'
import ComponentMarket from '@/components/ComponentMarket'

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
