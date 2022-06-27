const createContact = () => {
    const content = document.querySelector('#content');

    const contact = document.createElement('div')
    contact.setAttribute('class', 'contact');

    const contactHeaderDiv = document.createElement('div');
    contactHeaderDiv.setAttribute('class', 'contact-header-div');
    const contactHeader = document.createElement('h3');
    contactHeader.setAttribute('id', 'contact-header');
    contactHeader.innerText = 'More Questions?';
    const contactHeaderPara = document.createElement('p');
    contactHeaderPara.setAttribute('id', 'contact-header-para')
    contactHeaderPara.innerText = 'Contact us any time or come by and see us in person';
    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('class', 'contact-info');
    const rmnPhone = document.createElement('p')
    rmnPhone.setAttribute('id', 'rmn-phone');
    rmnPhone.innerText = '(888)888-8888';
    const rmnEmail = document.createElement('p');
    rmnEmail.setAttribute('id', 'rmn-email');
    rmnEmail.innerText = "rmn@rmn.rmn"
    const rmnAddress = document.createElement('p');
    rmnAddress.setAttribute('id', 'rmn-address');
    rmnAddress.innerText = '1600 Pennsylvania NW, Washington, DC 20500, United States';
    
    contactInfo.appendChild(rmnPhone);
    contactInfo.appendChild(rmnEmail);
    contactInfo.appendChild(rmnAddress);
    contactHeaderDiv.appendChild(contactHeader)
    contactHeaderDiv.appendChild(contactHeaderPara)

    contact.appendChild(contactHeaderDiv);
    contact.appendChild(contactInfo);

    content.appendChild(contact);

}

    export default createContact