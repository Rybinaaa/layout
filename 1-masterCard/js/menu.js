const menu = {};

let propertiesItem = document.querySelectorAll('.menu li')

let prop = new Object;

document.querySelector('.menu').addEventListener('mouseover', () =>{
    propertiesItem = document.querySelectorAll('.menu li')
    propertiesItem.forEach(item => {
        prop[`${item.innerText}`] = new Object;
        let padding = parseInt(window.getComputedStyle(item, null).getPropertyValue('padding-right'))
        prop[`${item.innerText}`].width = `${item.offsetWidth}px`
        prop[`${item.innerText}`].left = `${item.getBoundingClientRect().x + padding}px`
        prop[`${item.innerText}`].height = `${parseInt(item.getBoundingClientRect().y) + parseInt(item.offsetHeight)}px`
        let id = item.innerText.split(' ').join('');
        prop[`${item.innerText}`].title = `"${id}"`;
    })
})







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
        <div class="list" id=${prop[option.title].title} style="width:${prop[option.title].width}; left:${prop[option.title].left}; top:${prop[option.title].height}; position:fixed">
            ${createContent(option.content)}
        </div>
        `
        document.querySelector('.menu').insertAdjacentHTML('afterend', list)
}

function createContent (element){
    let content = '';
    element.forEach(e => {
        content += `<a href="http://#">${e}</a><hr>
        `;
    })
    return content;
}


document.querySelector('.menu').addEventListener('mouseover', event =>{
    let checkOption = options.find(element => element.title ===  event.target.innerText)
    // if(document.querySelector('.list')) document.querySelector('.nav').removeChild(document.querySelector('list'))
    if(!document.getElementById(`${checkOption.title.split(' ').join('')}`)) menu.create(checkOption);
    console.log((document.querySelector('.list')));



    const outOption = document.getElementById(`${checkOption.title.split(' ').join('')}`)
    document.querySelector('.menu').addEventListener('mouseout', () => {
        window.addEventListener('mouseover', event => {
            // console.log(outOption);
                // console.log(event.target.parentNode!==outOption);

                if (event.target!==outOption&&event.target.parentNode!==outOption){

                    document.querySelector('.nav').removeChild(outOption)
                };        
            })
        })
})

