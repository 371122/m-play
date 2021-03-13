import vDraggable from './vDraggable'

const directives = {}
directives.install = Vue => {
    Vue.directive('draggable', vDraggable)
}

export default directives