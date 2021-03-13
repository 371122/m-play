export const components = [
    {
        name:"container",
        isContainer:true,
        id:"1",
        tag:"RootContainer",
        attrs:{
            style:{
                backgroundColor:"gray"
            }
        },
        children: []
    },
    {
        name:"text",
        id:"2",
        tag:"p",
        attrs:{
            style:{
                backgroundColor: 'gray',
                fontSize: '20px'
            }
        }
    },
    {
        name:"image",
        id:"3",
        tag:"div",
        attrs:{
            style:{
                backgroundImage: `url('https://www.sveltejs.cn/svelte-logo-horizontal.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto'
            }
        }
    }
]