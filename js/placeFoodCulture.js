
//popup stuff
function showPopUp(name) {
  var popUpToShow = document.getElementById(name);
  popUpToShow.style.display="block";
  //blur the other stuff
  var container= document.querySelector(".container");
  container.style.filter="blur(30px)";
}
function hidePopUp(name) {
  //hide popup
  var popUpToHide = document.getElementById(name);
  popUpToHide.style.display="none";
  //unblur backgorund stuff 
  var container= document.querySelector(".container");
  container.style.filter="blur(0px)";
}

//code for adding all the cards

//get the card holder 
const carousel=document.querySelector('.carousel');
function createCard(name,type,sliderPicture,popUpPicture,description){
    //create a card
    const card=document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage=`url(${sliderPicture})`;


    //append the card on the carrousel
    carousel.appendChild(card);

    //create card empty space and append it to the card
    const cardEmptySpace=document.createElement('div');
    cardEmptySpace.classList.add('card-empty-space');
    card.appendChild(cardEmptySpace);

    //create card description and append it to the card
    const cardInfo=document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);


    //create card title and append it to the card info
    const cardTitle=document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML=name;
    cardInfo.appendChild(cardTitle);

    //create card type and append it to the card info
    const cardType=document.createElement('div');
    cardType.classList.add('card-type');
    cardType.innerHTML=type;
    cardInfo.appendChild(cardType);

    //create a pop up and add it to the document
    const popUp=document.createElement('div');
    popUp.classList.add('pop-up');
    document.body.appendChild(popUp);

    //give the popup an id
    popUp.setAttribute('id', name);

    //add the closing button to the popup
    const closeButton=document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML='x'
    popUp.appendChild(closeButton);

    //add the image holder of the popup
    const imageHolderPopUp=document.createElement('div');
    imageHolderPopUp.classList.add('image-holder-pop-up');
    popUp.appendChild(imageHolderPopUp);

    //add the image to the holder 
    const imagePopUp=document.createElement('img');
    imagePopUp.classList.add('image-pop-up');
    imagePopUp.src=popUpPicture;
    imageHolderPopUp.appendChild(imagePopUp);


    // add the article of the popup
    const articlePopUp=document.createElement('div');
    articlePopUp.classList.add('article-pop-up');
    popUp.appendChild(articlePopUp);

    //add the title to the article of the popup
    const titlePopUp=document.createElement('div');
    titlePopUp.classList.add('title-pop-up');
    titlePopUp.innerHTML=name;
    articlePopUp.appendChild(titlePopUp);

    //add the description to the article of the popup
    const descriptionPopUp=document.createElement('div');
    descriptionPopUp.classList.add('description-pop-up');
    descriptionPopUp.innerHTML=description;
    articlePopUp.appendChild(descriptionPopUp);

    //add the on click property to the card 
    card.addEventListener('click',function(){
      showPopUp(name);
    });
    //add the on click property to the clossing button
    closeButton.addEventListener('click',function(){
      hidePopUp(name)
    });
}
//PLACES PAGE

const placesToVisit = [
  {
    name: "Tokyo",
    type: "city",
    sliderPicture: "https://lp-cms-production.imgix.net/2021-04/Pontocho_Kyoto.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    popUpPicture: "https://lp-cms-production.imgix.net/2021-04/Pontocho_Kyoto.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "this is a place bla bla bla",
  },
  {
    name: "Naoshima",
    type: "island",
    sliderPicture: "https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
    popUpPicture:"https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
    description: "this is a place bla bla bla",
  },
  {
    name: "Memorial Cenotaph ",
    type: "type",
    sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "this is a place bla bla bla",
  },
  {
    name: "Yakushima",
    type: "island",
    sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "this is a place bla bla bla",
  },
  {
    name: "Kamikōchi",
    type: "type",
    sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1254380497.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1254380497.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "this is a place bla bla bla",
  }
];

function displayPlaces(){
  for(let i=0;i<placesToVisit.length;i++){
    createCard(placesToVisit[i].name,placesToVisit[i].type,placesToVisit[i].sliderPicture,placesToVisit[i].popUpPicture,placesToVisit[i].description);
  }
}

//food to eat page
const foodToEat = [
  {
    name: "Sushi",
    type: "Raw",
    sliderPicture:"pictures/food/sushi2.jpg",
    popUpPicture:"pictures/food/sushi1.jpg",
    description: "Sushi is a traditional Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients (ネタ, neta), such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is 'sushi rice', also referred to as shari.",
  },
  {
  name: "Ramen",
  type: "Soup",
  sliderPicture:"pictures/food/FRS_6354.JPG",
  popUpPicture:"pictures/food/ramen.jpg",
  description: "Quick-cooking egg noodle soup usually served in a broth with bits of meat and vegetables. Ramen was originally imported from China and has become one of the most popular dishes in Japan in recent decades. Ramen are inexpensive and widely available, two factors that make them an ideal option for budget travelers."
  },
  {
    name: "Okonomiyaki",
    type: "Pancake",
    sliderPicture:"pictures/food/okonomiyaki.jpg",
    popUpPicture:"pictures/food/okonomiyaki.jpg",
    description: "Savory pancake dish consisting of wheat flour batter and other ingredients cooked on a teppan. Common additions include cabbage, meat, and seafood, and toppings include okonomiyaki sauce, aonori, katsuobushi, Japanese mayonnaise, and pickled ginger.",
    },

{
  name: "Tempura",
  type: "Fried",
  sliderPicture: "pictures/food/tempura.jpg",
  popUpPicture:"https://resources.matcha-jp.com/archive_files/jp/2015/09/ginza_gonpachi_20140914v.jpg",
  description: "Typical Japanese dish usually consisting of seafood, meat and vegetables that have been battered and deep fried. The dish was introduced by Iberians in Nagasaki through the fritter-cooking techniques in the 16th century.",
},

{
  name: "Tofu",
  type: "Vegetarian",
  sliderPicture: "pictures/food/tofu.jpg",
  popUpPicture:"https://images.japancentre.com/page_elements/image1s/1515/original/tofu-bean-curd.jpg?1470240775",
  description: "Tofu, also known as bean curd ia a soft and xrelatively flavourless food product made from soybeans. Tofu is an important source of protein in the cuisines of China, Japan, Korea, and Southeast Asia. It is believed to date from the Han dynasty (206 BCE–220 CE). Tofu is made from dried soybeans that are soaked in water, crushed, and boiled.",
}
];
function displayFood(){
  for(let i=0;i<foodToEat.length;i++){
    createCard(foodToEat[i].name,foodToEat[i].type,foodToEat[i].sliderPicture,foodToEat[i].popUpPicture,foodToEat[i].description);
  }
}

//culture page 
const culturalAspect = [
  {
    name: "Sumo",
    type: "Sport",
    sliderPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
    popUpPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
    description: "Sumo is Japan's national sport, a uniquely Japanese pursuit involving physical strength, strictly observed ritual, a complex code of behaviour, religious overtones, a daunting hierarchy system and feudalistic training regimes. It originated 15 centuries ago in ancient Shinto ceremonies.",
  },
  {
    name: "Sumo",
    type: "Sport",
    sliderPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
    popUpPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
    description: "Sumo is Japan's national sport, a uniquely Japanese pursuit involving physical strength, strictly observed ritual, a complex code of behaviour, religious overtones, a daunting hierarchy system and feudalistic training regimes. It originated 15 centuries ago in ancient Shinto ceremonies.",
},

{
  name: "Sumo",
  type: "Sport",
  sliderPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  popUpPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  description: "Sumo is Japan's national sport, a uniquely Japanese pursuit involving physical strength, strictly observed ritual, a complex code of behaviour, religious overtones, a daunting hierarchy system and feudalistic training regimes. It originated 15 centuries ago in ancient Shinto ceremonies.",
},

{
  name: "Sumo",
  type: "Sport",
  sliderPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  popUpPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  description: "Sumo is Japan's national sport, a uniquely Japanese pursuit involving physical strength, strictly observed ritual, a complex code of behaviour, religious overtones, a daunting hierarchy system and feudalistic training regimes. It originated 15 centuries ago in ancient Shinto ceremonies.",
},
{
  name: "Sumo",
  type: "Sport",
  sliderPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  popUpPicture:"https://static01.nyt.com/images/2016/01/27/sports/27SUMOweb1/27SUMOweb1-superJumbo-v2.jpg",
  description: "Sumo is Japan's national sport, a uniquely Japanese pursuit involving physical strength, strictly observed ritual, a complex code of behaviour, religious overtones, a daunting hierarchy system and feudalistic training regimes. It originated 15 centuries ago in ancient Shinto ceremonies.",
}
];
function displayCulture(){
  for(let i=0;i<culturalAspect.length;i++){
    createCard(culturalAspect[i].name,culturalAspect[i].type,culturalAspect[i].sliderPicture,culturalAspect[i].popUpPicture,culturalAspect[i].description);
  }
}


