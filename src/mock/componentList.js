export const components = [
    {
        name:"container",
        isContainer:true,
    },
    {
        name:"text",
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