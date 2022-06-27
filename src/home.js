const createContent = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.setAttribute('id', 'home-text')
    header.innerText = "The Finest Instant Ramen";
    const para = document.createElement('p')
    para.setAttribute('id', 'home-p')
    para.innerText = `"We're dedicated to bringing you only the finest instant ramen. Our collection had been hand curated since 2022"`;
    const ramenImage = document.createElement('img')
    ramenImage.setAttribute('id', 'home-image')
    ramenImage.src = "../src/images/ramen.jpeg";
    ramenImage.alt = 'picture of various ramen';
    content.appendChild(header);
    content.appendChild(ramenImage)
    content.appendChild(para);
}

export default createContent;