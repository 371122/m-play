<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Sketch :schema="schema" />
  </div>
</template>

<script>
// @ is an alias to /src
import { schema } from '@/mock/schema'
import Sketch from '@/components/Sketch'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Sketch
  }
};
</script>
