const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const workSection = document.getElementById('work-section');
const cardPopup = document.querySelector('.popup');
const body = document.querySelector('.body');

const navLink = Array.from(document.querySelectorAll('.nav-link'));

const wrap = document.querySelector('.wrapper');

// this will loop over each link when clicked
navLink.forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
}));

// listen for hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});

// listen for close button click
closeMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  wrap.classList.toggle('w-active');
});

// All card Information will be referenced from this object
const cardArray = [
  {
    name: 'Tonic',
    image: 'images/FirstCover.png',
    time: {
      text1: 'CANOPY',
      text2: 'Back-End-Dev',
      text3: '2015',
      img: 'images/Counter.png',
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    image: 'images/secondCover.png',
    time: {
      text1: 'CANOPY',
      text2: 'Back-End-Dev',
      text3: '2015',
      img: 'images/Counter.png',
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    image: 'images/ThirdCover.png',
    time: {
      text1: 'CANOPY',
      text2: 'Back-End-Dev',
      text3: '2015',
      img: 'images/Counter.png',
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    image: 'images/fouthCover.png',
    time: {
      text1: 'CANOPY',
      text2: 'Back-End-Dev',
      text3: '2015',
      img: 'images/Counter.png',
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
  },
];

// Helper function for card creation
const createCard = (arr, i) => {
  const iterators = Array.from(Array(arr[i].languages.length).keys());
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card';
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  const cImage = document.createElement('img');
  cImage.src = arr[i].image;
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  const article = document.createElement('article');
  const cardHeader = document.createElement('h2');
  cardHeader.innerHTML = arr[i].name;
  const cardTime = document.createElement('div');
  cardTime.className = 'card-time';
  const description = document.createElement('p');
  description.innerHTML = arr[i].description;
  const cardList = document.createElement('ul');
  cardList.className = 'card-list';
  const cardButton = document.createElement('button');
  cardButton.classList.add('card-button', 'button');
  cardButton.id = `${i}`;

  workSection.appendChild(cardContainer);
  cardContainer.append(cardImage, cardContent);
  cardImage.appendChild(cImage);
  cardContent.appendChild(article);
  cardTime.append(document.createElement('p'), document.createElement('img'), document.createElement('p'), document.createElement('img'), document.createElement('p'));
  cardTime.children[0].innerHTML = arr[i].time.text1;
  cardTime.children[1].src = arr[i].time.img;
  cardTime.children[2].innerHTML = arr[i].time.text2;
  cardTime.children[3].src = arr[i].time.img;
  cardTime.children[4].innerHTML = arr[i].time.text3;
  article.append(cardHeader, cardTime, description, cardList, cardButton);
  iterators.forEach((x) => {
    cardList.appendChild(document.createElement('li'));
    const line = cardList.children[x];
    line.innerHTML = arr[i].languages[x];
  });
  cardButton.innerHTML = 'See Project';
};

// Create the cards
const cardCount = Array.from(Array(cardArray.length).keys());
cardCount.forEach((x) => createCard(cardArray, x));

// This Function deletes the Popup
const deletePopup = () => {
  while (cardPopup.firstChild) {
    cardPopup.removeChild(cardPopup.firstChild);
  }
};

// This Function creates the Popup
const createPopup = (arr, i) => {
  // Set up Popup Layout
  const headerDiv = document.createElement('div');
  headerDiv.className = 'popup-header';
  const headerContent = document.createElement('div');
  headerContent.className = 'popup-h-content';
  const popupHeading = document.createElement('h1');
  popupHeading.className = 'popup-content-heading';
  popupHeading.innerHTML = arr[i].name;
  const popupTime = document.createElement('div');
  popupTime.className = 'popup-content-time';
  const popupClose = document.createElement('img');
  popupClose.src = 'images/dark-close.png';
  const popupImage = document.createElement('img');
  popupImage.src = arr[i].image;
  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  const popupText = document.createElement('div');
  popupText.className = 'popup-text';
  popupText.innerHTML = arr[i].longDescription;
  const popupLangink = document.createElement('div');
  popupLangink.className = 'popup-lang-link';
  const popupLanguages = document.createElement('div');
  popupLanguages.className = 'popup-lang';
  const popupLinks = document.createElement('div');
  popupLinks.className = 'popup-links';
  const popupButton1 = document.createElement('button');
  popupButton1.innerHTML = 'See Live';
  const popupButton2 = document.createElement('button');
  popupButton2.innerHTML = 'See Source';
  const popupbtnimg1 = document.createElement('img');
  popupbtnimg1.src = 'images/seelive.png';
  const popupbtnimg2 = document.createElement('img');
  popupbtnimg2.src = 'images/githubinbutton.png';

  // Append Items to required parents
  cardPopup.append(headerDiv, popupImage, popupContent);
  headerDiv.append(headerContent, popupTime);
  headerContent.append(popupHeading, popupClose);
  popupContent.append(popupText, popupLangink);
  popupLangink.append(popupLanguages, popupLinks);
  popupTime.append(document.createElement('p'), document.createElement('img'), document.createElement('p'), document.createElement('img'), document.createElement('p'));
  popupTime.children[0].innerHTML = arr[i].time.text1;
  popupTime.children[1].src = arr[i].time.img;
  popupTime.children[2].innerHTML = arr[i].time.text2;
  popupTime.children[3].src = arr[i].time.img;
  popupTime.children[4].innerHTML = arr[i].time.text3;
  popupButton1.appendChild(popupbtnimg1);
  popupButton2.appendChild(popupbtnimg2);

  // Iterate through the Languages in CardArray and Append each Language
  const iterators = Array.from(Array(arr[i].languages.length).keys());
  iterators.forEach((x) => {
    popupLanguages.appendChild(document.createElement('li'));
    const line = popupLanguages.children[x];
    line.innerHTML = arr[i].languages[x];
  });
  popupLinks.append(popupButton1, popupButton2);

  // Add Close functionality to Close Button (This is where the delete popup function is used)
  popupClose.addEventListener('click', () => {
    cardPopup.classList.toggle('active');
    wrap.classList.toggle('blurred');
    body.classList.toggle('unscroll');
    deletePopup();
  });
};

// This button triggers Popup creation based on cards they're clicked from
const buttons = Array.from(document.querySelectorAll('.card-content .button'));
buttons.forEach((x) => x.addEventListener('click', () => {
  if (!cardPopup.classList.contains('active')) {
    cardPopup.classList.toggle('active');
    createPopup(cardArray, x.id);
    wrap.classList.toggle('blurred');
    body.classList.toggle('unscroll');
  }
}));

// Form Client-Side Validation Goes Here!
const form = document.getElementById('contact-form');
const formInput = Array.from(document.querySelectorAll('.form-input'));
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailError.innerHTML = 'Email Inputs should be lowercase';
    emailError.classList.add('display');
    email.classList.add('invalid');
  } else {
    emailError.innerHTML = '';
    if (email.classList.contains('invalid')) { email.classList.remove('invalid'); }
  }
});

formInput.forEach((x) => x.addEventListener('click', () => {
  if (emailError.classList.contains('display')) {
    emailError.innerHTML = 'Email Inputs should be lowercase';
    emailError.classList.remove('display');
    email.classList.add('invalid');
  }
}));

// Save Form Inputs to Local Storage

form.addEventListener('submit', () => {
  const inputs = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('form_inputs', JSON.stringify(inputs));
});

const setInputs = () => {
  if (localStorage.getItem('form_inputs')) {
    const {
      name,
      email,
      message,
    } = JSON.parse(localStorage.getItem('form_inputs'));
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
  }
};

setInputs();