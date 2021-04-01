import vDraggable from './vDraggable'
import vDroppable from './vDroppable'
import vResizable from './vResizable'

const directives = {}
directives.install = Vue => {
    Vue.directive('draggable', vDraggable)
    Vue.directive('droppable', vDroppable)
    Vue.directive('resizable', vResizable)
}

export default directives