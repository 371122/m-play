<script>
/**
 * 根据tag渲染不容类型的contBaesainer
 * container递归渲染子树
 */
import Vue from 'vue'
export default Vue.extend({
    name:"BaseContainer",
    
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