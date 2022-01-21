const $ = {}
 
$.createProductSlider = dataArts => {
    let innerTxt = '';
    dataArts.forEach(art => {
        innerTxt = `
            <div class="art-window" id=${art.article} >
                <img src=${art.mainImage} alt=${art.titleArt} class="mainImage">
                <h3 class="titleArt">${art.titleArt}</h3>
                <h2 class="artist">${art.artist}</h2>
                <h2 class="description">${art.description}</h2>
                <div class="desc-wrap">
                <h2 class="price">${art.price}$</h2>
                <div class="desc-wrap-icon">
                <a href="#" class="descIconLink"> <img src="assets/images/button-buy.svg" alt="" class="descIconImg"></a>
<a href="#" class="descIconLink"> <img src="assets/images/button-share.svg" alt="" class="descIconImg"></a>
                </div>
                </div>
            </div>
        `
        document.querySelector('.slider').insertAdjacentHTML('beforeend', innerTxt);
    });
}

$.deleteProductFromSlide = id => {
    document.querySelector('.slider').removeChild(document.getElementById(`${id}`));
}

$.createMenu = typeProduct => {
    let innerTxt = '';
    typeProduct.forEach(type => {
        innerTxt = `
            <li class="menuTitle">
                <a href=${type.mainMenu.link} class="mainMenuLink">${type.mainMenu.title}</a>
                <ul class="sub-menu">
        `

        type.subMenu.forEach(subColumn => {
            innerTxt += `
            <li class="subMenuTitle">
                <a href=${subColumn.link} class="subMenuLink">${subColumn.title}</a>
            </li>
            `
        });

        innerTxt += `
            </ul>
        </li>
        `
        document.querySelector('.nav').insertAdjacentHTML('beforeend', innerTxt);
    })
}
$.createMenu(typeProduct)
$.createProductSlider(dataArts)

console.log(document.querySelector('.footer').parentNode.offsetWidth);
// mainMenu: {title: 'paintings', link: '#'},
// subMenu: [{title: 'landscapes', link: '#'}]

function vh (x){
    console.log(`${(100*x/1039).toFixed(2)}vh`);
}

function vw (x){
    console.log(`${(100*x/1140).toFixed(2)}vw`);
}



// console.log((document.querySelector('.slider').lastElementChild.getBoundingClientRect().x+document.querySelector('.slider').lastElementChild.offsetWidth));

