import vDraggable from './vDraggable'
import vDroppable from './vDroppable'

const directives = {}
directives.install = Vue => {
    Vue.directive('draggable', vDraggable)
    Vue.directive('droppable', vDroppable)
}

export default directives