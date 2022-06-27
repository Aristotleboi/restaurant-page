const createMenu = () => {
    const content = document.querySelector('#content');

    //menu div
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu");

    //menu items

    //first menu item
    const ramen1 = document.createElement('div');
    ramen1.setAttribute('class', 'ramen-menu-item');
    const ramenImg1 = document.createElement('img')
    ramenImg1.setAttribute('class', 'ramen-image');
    ramenImg1.src = '../src/images/seafood.png';
    ramenImg1.alt = 'a cup of seafood ramen'
    const ramenInfo1 = document.createElement('div')
    ramenInfo1.setAttribute('class', 'menu-item-info')
    const ramenName1 = document.createElement('h3')
    ramenName1.setAttribute('class', 'ramen-name')
    ramenName1.innerText = 'Seafood Ramen';
    const ramenDisc1 = document.createElement('p')
    ramenDisc1.setAttribute('class', 'ramen-disc')
    ramenDisc1.innerText = 'Cup Noodles seafood ramen';
    const ramenPrice1 = document.createElement('div')
    ramenPrice1.setAttribute('class', 'price')
    ramenPrice1.innerText = '$3'
    const ramenButton1 = document.createElement('button')
    ramenButton1.setAttribute('class', 'buy-button')
    ramenButton1.innerText = 'Add to Cart'

    ramenInfo1.appendChild(ramenName1);
    ramenInfo1.appendChild(ramenDisc1);
    ramenInfo1.appendChild(ramenPrice1);
    ramenInfo1.appendChild(ramenButton1);
    ramen1.appendChild(ramenImg1);
    ramen1.appendChild(ramenInfo1)

    //second menu item
    const ramen2 = document.createElement('div');
    ramen2.setAttribute('class', 'ramen-menu-item');
    const ramenImg2 = document.createElement('img')
    ramenImg2.setAttribute('id', 'ramen-image2');
    ramenImg2.src = '../src/images/curry.png';
    ramenImg2.alt = 'a cup of curry ramen'
    const ramenInfo2 = document.createElement('div')
    ramenInfo2.setAttribute('class', 'menu-item-info')
    const ramenName2 = document.createElement('h3')
    ramenName2.setAttribute('class', 'ramen-name')
    ramenName2.innerText = 'Curry Ramen';
    const ramenDisc2 = document.createElement('p')
    ramenDisc2.setAttribute('class', 'ramen-disc')
    ramenDisc2.innerText = 'Cup Noodles curry ramen';
    const ramenPrice2 = document.createElement('div')
    ramenPrice2.setAttribute('class', 'price')
    ramenPrice2.innerText = '$4'
    const ramenButton2 = document.createElement('button')
    ramenButton2.setAttribute('class', 'buy-button')
    ramenButton2.innerText = 'Add to Cart'

    ramenInfo2.appendChild(ramenName2);
    ramenInfo2.appendChild(ramenDisc2);
    ramenInfo2.appendChild(ramenPrice2);
    ramenInfo2.appendChild(ramenButton2);
    ramen2.appendChild(ramenImg2);
    ramen2.appendChild(ramenInfo2)

    //third menu item
    const ramen3 = document.createElement('div');
    ramen3.setAttribute('class', 'ramen-menu-item');
    const ramenImg3 = document.createElement('img')
    ramenImg3.setAttribute('id', 'ramen-image3');
    ramenImg3.src = '../src/images/kyushu.png';
    ramenImg3.alt = 'a cup of kyushu white ramen';
    const ramenInfo3 = document.createElement('div')
    ramenInfo3.setAttribute('class', 'menu-item-info')
    const ramenName3 = document.createElement('h3')
    ramenName3.setAttribute('class', 'ramen-name')
    ramenName3.innerText = 'Kyushu White Ramen';
    const ramenDisc3 = document.createElement('p')
    ramenDisc3.setAttribute('class', 'ramen-disc')
    ramenDisc3.innerText = 'Cup Noodle kyushu white ramen';
    const ramenPrice3 = document.createElement('div')
    ramenPrice3.setAttribute('class', 'price')
    ramenPrice3.innerText = '$3'
    const ramenButton3 = document.createElement('button')
    ramenButton3.setAttribute('class', 'buy-button')
    ramenButton3.innerText = 'Add to Cart'

    ramenInfo3.appendChild(ramenName3);
    ramenInfo3.appendChild(ramenDisc3);
    ramenInfo3.appendChild(ramenPrice3);
    ramenInfo3.appendChild(ramenButton3);
    ramen3.appendChild(ramenImg3);
    ramen3.appendChild(ramenInfo3)

    //fourth menu item
    const ramen4 = document.createElement('div');
    ramen4.setAttribute('class', 'ramen-menu-item');
    const ramenImg4 = document.createElement('img')
    ramenImg4.setAttribute('id', 'ramen-image4');
    ramenImg4.src = '../src/images/mushroom.png';
    ramenImg4.alt = 'a cup of mushroom flavoured ramen';
    const ramenInfo4 = document.createElement('div')
    ramenInfo4.setAttribute('class', 'menu-item-info')
    const ramenName4 = document.createElement('h3')
    ramenName4.setAttribute('class', 'ramen-name')
    ramenName4.innerText = 'Mushroom Ramen';
    const ramenDisc4 = document.createElement('p')
    ramenDisc4.setAttribute('class', 'ramen-disc')
    ramenDisc4.innerText = 'Cup Noodle mushroom ramen';
    const ramenPrice4 = document.createElement('div')
    ramenPrice4.setAttribute('class', 'price')
    ramenPrice4.innerText = '$3'
    const ramenButton4 = document.createElement('button')
    ramenButton4.setAttribute('class', 'buy-button')
    ramenButton4.innerText = 'Add to Cart'

    ramenInfo4.appendChild(ramenName4);
    ramenInfo4.appendChild(ramenDisc4);
    ramenInfo4.appendChild(ramenPrice4);
    ramenInfo4.appendChild(ramenButton4);
    ramen4.appendChild(ramenImg4);
    ramen4.appendChild(ramenInfo4)

    menu.appendChild(ramen1);
    menu.appendChild(ramen2)
    menu.appendChild(ramen3)
    menu.appendChild(ramen4)
    content.appendChild(menu)
}

export default createMenu