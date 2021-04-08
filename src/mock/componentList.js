export const components = [
    // {
    //     name:"container",
    //     isContainer:true,
    //     id:"1",
    //     tag:"RootContainer",
    //     attrs:{
    //         style:{
    //             backgroundColor:"gray"
    //         }
    //     },
    //     children: []
    // },
    {
        name:"FlexContainer",
        isContainer:true,
        id:"4",
        tag:"FlexContainer",
        attrs:{
            style:{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:"#e5e5e5",
                minWidth: '200px',
                minHeight: '100px',
                border:'1px solid red'
            }
        },
        children: []
    },
    {
        name:"text",
        id:"2",
        tag:"m-text",
        attrs:{
            text:"文本内容",
            style:{
                backgroundColor: '#8fd1ef',
                border: '1px solid #3f51b5',
                lineHeight: '20px',
                minWidth: '100px',
                fontSize: '20px'
            }
        }
    },
    // {
    //     name:"image",
    //     id:"3",
    //     tag:"div",
    //     attrs:{
    //         style:{
    //             backgroundImage: `url('https://www.sveltejs.cn/svelte-logo-horizontal.svg')`,
    //             backgroundRepeat: 'no-repeat',
    //             backgroundSize: '100% auto'
    //         }
    //     }
    // }
]