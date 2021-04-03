<template>
  <div class="picture-text">
      <div class="picture" v-resizable style="width:100px;height: 100px;">
          <img style="width: 100%; height: 100%" src="https://pt-starimg.didistatic.com/static/starimg/img/4mD6T6XEwS1617288715116.jpeg"/>
      </div>
      <div class="text">
          <h4>乡秀树</h4>
          <p>乡秀树，1971年日本特摄剧《归来的奥特曼》中的男主角，是杰克·奥特曼的人间体。为保卫地球的安全做出重大贡献。</p>
      </div>
  </div>
</template>

<script>
import VueDraggaleResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
    name:"PictureText",
    components:{
        VueDraggaleResizable
    }
}
</script>

<style lang="scss">
.picture-text {
    width: 100%;
    height: 200px;
    position: relative;
    display: flex;
    .picture{
        display: block;
        flex-shrink: 0;
    }


    .text{
        text-align: left;
        flex-shrink: 1;
        flex-grow: 1;
        p {
            font-size: 12px;
        }
    }
}
</style>