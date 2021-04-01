
const vResizable = {
    bind:function(el, binding, vnode){
        const vm = vnode.context;
        el.__lisenters__ = {

        }
        el.style.position = 'relative'
        const anchor = document.createElement('div')
        anchor.style.cssText = `
            position:absolute;
            right: 0;
            bottom: 0;
            width: 12px;
            height: 12px;
            border: 1px solid #134dc5;
            background-color: #fff;
            cursor: se-resize;
        `
        anchor.addEventListener('mousedown', (e)=>{
            const { pageX, pageY } = e
            vm._startX = pageX
            vm._startY = pageY
            vm._offsetWidth = el.offsetWidth
            vm._offsetHeight = el.offsetHeight
            vm._actived = true
        })
        document.addEventListener('mousemove',(e)=>{
            if(!vm._actived) { return false }
            const { pageX, pageY } = e
            const deltaX = pageX - vm._startX
            const deltaY = pageY - vm._startY
            el.style.width = vm._offsetWidth + deltaX + 'px'
            el.style.height = vm._offsetHeight + deltaY + 'px'
        })
        document.addEventListener('mouseup', () => {
            vm._actived = false
        })
        el.appendChild(anchor)
    },
    update: function(el, binding){},
    unbind: function(el, binding){

    }
}
export default vResizable