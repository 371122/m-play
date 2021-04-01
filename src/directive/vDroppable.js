const vDroppable = {
    bind:function(el, binding, vnode){
        const vm = vnode.context;
        el.__lisenters__ = {

        }
        console.log('vDroppable', binding, vnode)
        el.addEventListener('mouseenter', (ev)=>{
            ev.stopPropagation()
            el.classList.add('drag-over')
        })
        el.addEventListener('mouseleave', (ev)=>{
            ev.stopPropagation()
            el.classList.remove('drag-over')
        })
        el.addEventListener('mouseup', (ev)=>{
            console.log('drop', ev.target)
            ev.stopPropagation();
            el.classList.remove('drag-over')
            const data = ev.dataTransfer.getData("text/plain");
            const widget = JSON.parse(data)
            widget.id = Date.now().toString(36)
            vm.handleDrop(widget)
        })
    },
    update: function(el, binding){},
    unbind: function(el, binding){

    }
}
export default vDroppable