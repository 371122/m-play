export const find = (ast, componentId) => {
    let component = ast
    const path = [ast]
    const f = data => {
        path.push(data)
        if (data.id === componentId) {
            component = data
            return true
        }
        return data.children && data.children.some(item => f(item))
    }
    f(ast)
    return { component, path }
}