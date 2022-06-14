const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const workSection = document.getElementById('work-section');
const cardPopup = document.querySelector('.popup')
const body = document.querySelector('.body')

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
  cardButton.id = `${i}`

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










