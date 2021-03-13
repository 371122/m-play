const vDroppable = {
    bind:function(el, binding, vnode){
        const vm = vnode.context;
        el.__lisenters__ = {

        }
        console.log(binding, vnode)
        el.addEventListener('dragenter', (ev)=>{
            el.classList.add('drag-over')
        })
        el.addEventListener('dragleave', (ev)=>{
            el.classList.remove('drag-over')
        })
        el.addEventListener('drop', (ev)=>{
            el.classList.remove('drag-over')
            console.log('drop', ev)
        })
    },
    update: function(el, binding){},
    unbind: function(el, binding){

    }
}
export default vDroppable