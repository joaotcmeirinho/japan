
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
    type: "City",
    sliderPicture:"pictures/tokyo.jpg",
    popUpPicture:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    description: "Tokyo is a city forever reaching into the future. It's Japan's top spot for contemporary art and architecture, pop culture, shopping, drinking and entertainment. But more than any one sight, it's the city itself that enchants visitors. It's a sprawling, organic thing, stretching as far as the eye can see. Always changing, and with a diverse collection of neighborhoods.",
  },
  { 
    name: "Mount Fiji",
    type: "Mountain",
    sliderPicture:"https://www.australiangeographic.com.au/wp-content/uploads/2018/06/Mt-Fuji_Japan.jpg",
    popUpPicture:"https://www.tripsavvy.com/thmb/xmHHjutbUKGMvgxh5Dr1F_BVXB8=/3435x2576/smart/filters:no_upscale()/fuji-mountain-in-autumn-822273028-5a6a8a9c3418c600363958d3.jpg",
    description:"Mount Fuji is Japan's highest mountain with 3776 meters. This mountain has been worshiped as a sacred mountain and it's very popular throughout the world. If you want to enjoy Mount Fuji at a more leisurely pace and from a nice natural surrounding, you should head to the Fuji Five Lake (Fujigoko) region at the northern foot of the mountain.",
  },
  {
    name:'Kyoto',
    type:'City',
    sliderPicture:'https://www.vounajanela.com/wp-content/uploads/2020/01/kyoto-japao-1-1.jpg',
    popUpPicture: 'https://besthqwallpapers.com/Uploads/11-10-2017/23574/thumb2-japan-4k-temple-summer-japanese-landmarks.jpg',
    description: "Kyoto, Japan's imperial capital for a thousand years, is home to more than a thousand temples.  There's the culture of tea, which you can appreciate at one of the city's many elegant teahouses; the art of the geisha, those iconic performers of traditional music and dance; and also a rich food culture, including kaiseki."
  },
  {
    name: "Naoshima",
    type: "Island",
    sliderPicture: "pictures/Naoshima2.jpg",
    popUpPicture:"https://www.erikastravelventures.com/wp-content/uploads/2019/08/P1010422-1024x762.jpg",
    description: "Naoshima is one of Japan's great success stories: a rural island on the verge of becoming a ghost town, now a world-class centre for contemporary art. Many of Japan's most lauded architects have contributed structures, including museums, a boutique hotel and even a bathhouse – all designed to enhance the island's natural beauty and complement its existing settlements.",
  },
  {
    name: "Hiroshima",
    type: "City",
    sliderPicture: "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1393700846.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "Hiroshima today is a forward-thinking city with attractive, leafy boulevards. It's not until you visit the Peace Memorial Museum that the true extent of human tragedy wreaked by the atomic bomb becomes vividly clear. The city's spirit of determination – as well as its food – will ensure that you'll have good memories to take with you when you leave.",
  },
  {
    name: "Yakushima",
    type: "Island",
    sliderPicture: "https://www.yakushimaexperience.com/wp-content/uploads/2020/08/cropped-HeaderMoss.jpeg",
    popUpPicture:"https://lp-cms-production.imgix.net/2021-04/shutterstockRF_423304240.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2",
    description: "Yakushima is a small magical island off the coast of southern Kyūshū. It is one of Japan's last primeval forest, here you'll find the yakusugi, an ancient cedar native to the island. The landscape here is believed to have been an inspiration for the iconic Studio Ghibli animated film Princess Mononoke.",
  },
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
  sliderPicture: "pictures/food/tempura1.jpg",
  popUpPicture:"pictures/food/tempura2.jpg",
  description: "Typical Japanese dish usually consisting of seafood, meat and vegetables that have been battered and deep fried. The dish was introduced by Iberians in Nagasaki through the fritter-cooking techniques in the 16th century.",
},

{
  name: "Tofu",
  type: "Vegetarian",
  sliderPicture: "pictures/food/tofu.jpg",
  popUpPicture:"https://images.japancentre.com/page_elements/image1s/1515/original/tofu-bean-curd.jpg?1470240775",
  description: "Tofu, also known as bean curd is a soft and relatively flavourless food product made from soybeans. Tofu is an important source of protein in the cuisines of China, Japan, Korea, and Southeast Asia. It is believed to date from the Han dynasty (206 BCE–220 CE). Tofu is made from dried soybeans that are soaked in water, crushed, and boiled.",
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
    name: "Cherry Bloosom",
    type: "Tradition",
    sliderPicture:"https://media.cntraveler.com/photos/5c3f46c2a5c1d51f43a9d220/3:2/w_3999,h_2666,c_limit/Japan_Cherry-Blossoms_GettyImages-179989245.jpg",
    popUpPicture:"https://resources.matcha-jp.com/resize/720x2000/2021/01/28-112002.jpeg",
    description: "The practice of viewing and appreciating cherry blossoms in a formal setting comes from many years ago. Special viewing pavilions for the nobility were built particularly for this purpose in Kyoto and Nara. Nowadays several drinking parties are conducted under the blossoms in Maruyama Park in Kyoto's Gion district today, in a cathartic mass-shedding of the normal Japanese restraint.",
  },
  {
    name: "Tea Ceremony",
    type: "Ritual",
    sliderPicture:"pictures/teaCeremony.jpg",
    popUpPicture:"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001073/img/basic/a0001073_main.jpg",
    description: "Japanese tradition which consists in a ceremonial way of preparing and drinking green tea typically in a traditional tearoom with tatami floor. Beyond just serving and receiving tea, one of the main purposes of the tea ceremony is for the guests to enjoy the hospitality of the host in an atmosphere distinct from the fast pace of everyday life.",
},

{
  name: "Geisha",
  type: "Tradition",
  sliderPicture:"pictures/geishas.jpg",
  popUpPicture:"https://st4.depositphotos.com/12982378/28151/i/600/depositphotos_281517862-stock-photo-geisha-in-black-kimono-with.jpg",
  description: "Geisha (or geiko) are professional entertainers who attend guests during meals, banquets and other occasions. They are trained in various traditional Japanese arts, such as dance and music. Geishas are said to have roots in female entertainers such as the saburuko female entertainers in the 7th century and shirabyoshi dancers around the early 13th century."
},

{
  name: "Shrines & temples",
  type: "Religion",
  sliderPicture:"pictures/shrines&temples.jpg",
  popUpPicture:"https://s3.voyapon.com/wp-content/uploads/2021/02/18141108/sanctuaire-temple-japon-3638.jpg",
  description: "In Japan, shrines are linked with the Shinto religion, and their names often end in the suffixes -gu, -jinja or -jingu. Temples, on the other hand, are ­Buddhist and usually end with -ji, -tera or -dera. Quite often, temples and shrines are found side by side, or a temple or shrine will have an complementary adjunct on the same sacred grounds.",
},
{
  name: "Onsen",
  type: "Natural",
  sliderPicture:"pictures/onsen.jpg",
  popUpPicture:"https://img1.wsimg.com/isteam/ip/f6b182aa-4f41-41e7-862e-400efb91804b/9da32e64-67a4-4594-9a54-8d6e6c204fd4.png",
  description: "Onsen are naturally-occurring hot springs located directly on the Pacific Ring of Fire. Beginning as health spas, Onsen has developed into one of the most popular tourist attractions in Japan as well as greatly influenced Japanese bathing culture. You have to wash up before entering the Onsen. Swimwear, clothing, or towels in the Onsen are considered 'dirty.'",
}
];
function displayCulture(){
  for(let i=0;i<culturalAspect.length;i++){
    createCard(culturalAspect[i].name,culturalAspect[i].type,culturalAspect[i].sliderPicture,culturalAspect[i].popUpPicture,culturalAspect[i].description);
  }
}


