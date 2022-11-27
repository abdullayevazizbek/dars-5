const wrapper = document.querySelector('.wrapper')

const node = [{
    tagName: 'header',
    atributes: {
        class: 'header'
    },
    content: [{

        tagName: 'div',
        atributes: {
            class: 'canteiner',
        },
        content: [{
            tagName: 'div',
            atributes: {
                class: 'header_row',
                id: 'text-id',
            },
            content: [
                {
                    tagName: 'div',
                    atributes: {
                        class: 'header_logo'
                    },
                    content:{
                        tagName:'img',
                        atributes:{
                            class:'header_logo-img'
                        },
                        content:'https://vasylisa.ru/themes/vasilisa/img/logotype.svg'
                    }
                },
                {

                }
            ]
        }]

    },]
},
{
    tagName: 'input',
    atributes: {
        class: 'input_text',
        // id: 'text-id',
    },
    // content: 'Hello World'
},
{
    tagName: 'input',
    atributes: {
        class: 'input_text',
    },
    // content: [{
    //     tagName: 'h4',
    //     atributes: {
    //         class: 'small-text',
    //         id: 'text-id',
    //     },
    //     content: 'Small text'
    // }]
},

]


function createDome(node, parent) {
    const { tagName, atributes, content } = node
    const element = document.createElement(tagName)


    for (let atribute in atributes) {
        element.setAttribute(atribute, atributes[atribute])
    }


    if (typeof content === 'string') {
        element.innerText = content
    } else {
        content.forEach((n) => {
            createDome(n, element)
        });
    }


    parent.append(element)
}


node.forEach((element) => {
    createDome(element, wrapper)
});