const menu = {};


console.log(window.innerHeight);
console.log(document.querySelector('.menu li').offsetWidth);
let propertiesItem = document.querySelectorAll('.menu li')

let prop = new Object;

    document.querySelector('.menu').addEventListener('mouseover', () =>{
    propertiesItem = document.querySelectorAll('.menu li')

    propertiesItem.forEach(item => {
        prop[`${item.innerText}`] = new Object;
        const koefWidth = (100/window.innerWidth)
        const koefHeight = (100/window.innerHeight)
        let padding = parseInt(window.getComputedStyle(item, null).getPropertyValue('padding-right'))
        prop[`${item.innerText}`].width = `${item.offsetWidth*koefWidth}vw`
        console.log(prop[`${item.innerText}`].width);
        prop[`${item.innerText}`].left = `${(item.getBoundingClientRect().x+padding)*koefWidth}vw`
        prop[`${item.innerText}`].height = `${parseInt(item.getBoundingClientRect().y)*koefHeight}vh`
        prop[`${item.innerText}`].paddingTop = `${parseInt(item.offsetHeight*koefHeight)}vh`
        let id = item.innerText.split(' ').join('');
        prop[`${item.innerText}`].title = `"${id}"`;
    })

})


//     propertiesItem = document.querySelectorAll('.menu li')

//     propertiesItem.forEach(item => {
//         prop[`${item.innerText}`] = new Object;
//         let padding = parseInt(window.getComputedStyle(item, null).getPropertyValue('padding-right'))
//         prop[`${item.innerText}`].width = `${item.offsetWidth}px`
//         prop[`${item.innerText}`].left = `${item.getBoundingClientRect().x + padding}px`
//         prop[`${item.innerText}`].height = `${parseInt(item.getBoundingClientRect().y) + parseInt(item.offsetHeight)}px`
//         let id = item.innerText.split(' ').join('');
//         prop[`${item.innerText}`].title = `"${id}"`;
//     })
// })









const options = [{
    title: 'Mastercard for you',
    content: ['Карты', 'Переводы', 'Сервисы']
    },
    {
    title: 'Mastercard for business',
    content: ['Предложения и акции', 'Бизнес Бонус', 'Торговым точкам']
    },
    {
    title: 'Vision',
    content: ['Карты', 'Переводы', 'Сервисы']
    },
    {
    title: 'Contacts',
    content: ['Кто мы']
    },
]


//обработка кнопки войти

menu.signUpOpen = () =>{
    document.querySelector('.modal-container').style.display = 'block';
    document.querySelector('.modal-window').style.transform = 'translateY(100px)'
}

menu.signUpClose = () => {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelector('.modal-window').style.transform = 'translateY(-500px)'
}

// cоздание выпадающих списков

menu.create = option => {
        let list = `
        <div class="list" id=${prop[option.title].title} style="width:${prop[option.title].width}; left:${prop[option.title].left}; top:${prop[option.title].height}; padding-top:${prop[option.title].paddingTop}">
            ${createContent(option.content)}
        </div>
        `
        console.log(list);
        document.querySelector('.menu').insertAdjacentHTML('afterend', list)
}

function createContent(element){
    let content = '';
    element.forEach(e => {
        content += `<a href="http://#">${e}</a>
        `;
    })
    return content;
}


document.querySelector('.menu').addEventListener('mouseover', event =>{
    let checkOption = options.find(element => element.title ===  event.target.innerText)
    if(document.querySelector('.list')) document.querySelector('.nav').removeChild(document.querySelector('.list'))
    if(!document.getElementById(`${checkOption.title.split(' ').join('')}`)) menu.create(checkOption);



    const outOption = document.getElementById(`${checkOption.title.split(' ').join('')}`)
    document.querySelector('.list').addEventListener('mouseleave', () => {

        document.querySelector('.list').style.display = 'none';
            document.querySelector('.nav').removeChild(document.querySelector('.list'))
    })

})

