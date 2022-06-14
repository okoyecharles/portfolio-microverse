// This Function deletes the Popup
const deletePopup = (parent) => {
    while (cardPopup.firstChild) {
      cardPopup.removeChild(cardPopup.firstChild);
    }
  }
  
  
  // This Function creates the Popup
  const createPopup = (arr, i) => {
  
    // Set up Popup Layout
    let headerDiv = document.createElement('div')
    headerDiv.className = 'popup-header'
    let headerContent = document.createElement('div')
    headerContent.className = 'popup-h-content'
    let popupHeading = document.createElement('h1')
    popupHeading.className = 'popup-content-heading'
    popupHeading.innerHTML = arr[i].name
    let popupTime = document.createElement('div')
    popupTime.className = 'popup-content-time'
    let popupClose = document.createElement('img')
    popupClose.src = 'images/dark-close.png'
    let popupImage = document.createElement('img')
    popupImage.src = arr[i].image
    let popupContent = document.createElement('div')
    popupContent.className ='popup-content'
    let popupText = document.createElement('div')
    popupText.className ='popup-text'
    popupText.innerHTML = arr[i].longDescription
    let popupLangink = document.createElement('div')
    popupLangink.className ='popup-lang-link'
    let popupLanguages = document.createElement('div')
    popupLanguages.className ='popup-lang'
    let popupLinks = document.createElement('div')
    popupLinks.className ='popup-links'
    let popupButton1 = document.createElement('button')
    popupButton1.innerHTML = 'See Live'
    let popupButton2 = document.createElement('button')
    popupButton2.innerHTML = 'See Source'
    let popupbtnimg1 = document.createElement('img')
    popupbtnimg1.src = 'images/seelive.png'
    let popupbtnimg2 = document.createElement('img')
    popupbtnimg2.src = 'images/githubinbutton.png'
  
  
    // Append Items to required parents
    cardPopup.append(headerDiv, popupImage, popupContent)
    headerDiv.append(headerContent, popupTime)
    headerContent.append(popupHeading, popupClose)
    popupContent.append(popupText, popupLangink)
    popupLangink.append(popupLanguages, popupLinks)
    popupTime.append(document.createElement('p'), document.createElement('img'), document.createElement('p'), document.createElement('img'), document.createElement('p'));
    popupTime.children[0].innerHTML = arr[i].time.text1;
    popupTime.children[1].src = arr[i].time.img;
    popupTime.children[2].innerHTML = arr[i].time.text2;
    popupTime.children[3].src = arr[i].time.img;
    popupTime.children[4].innerHTML = arr[i].time.text3;
    popupButton1.appendChild(popupbtnimg1)
    popupButton2.appendChild(popupbtnimg2)
  
  
    // Iterate through the Languages in CardArray and Append each Language
    const iterators = Array.from(Array(arr[i].languages.length).keys());
    iterators.forEach((x) => {
      popupLanguages.appendChild(document.createElement('li'));
      const line = popupLanguages.children[x];
      line.innerHTML = arr[i].languages[x];
    });
    popupLinks.append(popupButton1, popupButton2)
  
  
    // Add Close functionality to Close Button (This is where the delete popup function is used)
    popupClose.addEventListener('click', () => {
      cardPopup.classList.toggle('active')
      wrap.classList.toggle('blurred')
      body.classList.toggle('unscroll')
      deletePopup()
    })
  }
  
  // This button triggers Popup creation based on cards they're clicked from
  const buttons = Array.from(document.querySelectorAll('.card-content .button'))
  buttons.forEach(x => x.addEventListener('click', () => {
    if (!cardPopup.classList.contains('active')){
      cardPopup.classList.toggle('active')
      createPopup(cardArray, x.id)
      wrap.classList.toggle('blurred')
      body.classList.toggle('unscroll')
    }
  }))
  