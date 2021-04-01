<template>
  <div class="demo-page">
    <section id="container">
        <PictureText />
    </section>
  </div>
</template>
<script>
import PictureText from '../components/demo/PictureText'
export default {
  name:"Demo",
  components:{
    PictureText,
  }
}
</script>
<style lang="scss">
.demo-page {
  width: 100%;
  overflow: hidden;
  background: #f4f5f7;
  #container {
    width: 375px;
    margin: 20px auto;
    height: 800px;
    background-color: white;
    border: 1px solid rgb(194, 194, 194);
  }
}
</style>
