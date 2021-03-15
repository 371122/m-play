const vDraggable = {
    bind:function(el, binding, vnode){
        const widgetSource = binding.value
        const vm = vnode.context;
        // 
        el.__listeners__ = {

        }
        el.setAttribute('draggable', 'true')
        // el.addEventListener('drag', (ev)=>{console.log('drag',ev)})
        el.addEventListener('dragstart', (ev)=>{
            console.log('drag start', ev)
            ev.dataTransfer.setData("text/plain", JSON.stringify(widgetSource));
        })
        el.addEventListener('dragend', (ev)=>{
            console.log('drag end')
        })
    },
    update: function(el, binding){},
    unbind: function(el, binding){}
}
export default vDraggable