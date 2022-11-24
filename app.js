const wrapper = document.querySelector('.wrapper')

const node = [{
        tagName: 'h1',
        atributes: {
            class: 'text-class',
            id: 'text-id',
        },
        content: 'Hello World'
    },
    {
        tagName: 'div',
        atributes: {
            class: 'row',
        },
        content: [{
            tagName: 'h4',
            atributes: {
                class: 'small-text',
                id: 'text-id',
            },
            content: 'Small text'
        }]
    }
]


function createDome(node,parent) {
    const {tagName, atributes, content} = node
    const element = document.createElement(tagName)


    for (let atribute in atributes) {
        element.setAttribute(atribute,atributes[atribute])
    }


    if (typeof content === 'string') {
        element.innerText = content
    }else{
        content.forEach((n) => {
            createDome(n,element)
        });
    }


    parent.append(element)
}


node.forEach((element) => {
    createDome(element,wrapper)
})