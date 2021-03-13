const vDraggable = {
    bind:function(el, binding, vnode){
        const vm = vnode.context;
        el.__lisenters__ = {

        }
        el.addEventListener('drag', (ev)=>{console.log('drag',ev)})
        el.addEventListener('dragstart', (ev)=>{console.log('drag start', ev)})
        el.addEventListener('dragend', (ev)=>{console.log('drag end')})
    },
    update: function(el, binding){},
    unbind: function(el, binding){

    }
}
export default vDraggable