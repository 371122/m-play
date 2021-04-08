<script>
/**
 * 根据tag渲染不容类型的contBaesainer
 * container递归渲染子树
 */
import Vue from 'vue'
import emitter from '../../util/emitter'

export default Vue.extend({
    name:"BaseContainer",

    mixins: [emitter],
    
    props:{
      widget: Object
    },
    
    methods:{
      getChildrenElements(){
        console.log('children elements')
      }
    }
})
</script>

<style>

</style>