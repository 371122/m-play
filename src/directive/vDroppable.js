const vDroppable = {
    bind:function(el, binding, vnode){
        const vm = vnode.context;
        el.__lisenters__ = {

        }
        console.log('vDroppable', binding, vnode)
        el.addEventListener('dragenter', (ev)=>{
            ev.stopPropagation()
            console.log('drag-enter')
            el.classList.add('drag-over')
        })

        el.addEventListener('dragover', (ev)=>{
            ev.stopPropagation()
            ev.preventDefault();
            console.log('drag-over')
        })
        el.addEventListener('dragleave', (ev)=>{
            ev.stopPropagation()
            console.log('drag-leave')
            el.classList.remove('drag-over')
        })
        el.addEventListener('drop', (ev)=>{
            console.log('drop', ev.target)
            ev.preventDefault();
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