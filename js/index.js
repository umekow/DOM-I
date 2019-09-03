const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//nav
const nav_items = document.querySelectorAll('a'); 
nav_items[0].textContent = siteContent["nav"]["nav-item-1"]; 

nav_items[1].textContent = siteContent["nav"]["nav-item-2"]; 

nav_items[2].textContent = siteContent["nav"]["nav-item-3"];

nav_items[3].textContent = siteContent["nav"]["nav-item-4"]; 

nav_items[4].textContent = siteContent["nav"]["nav-item-5"];

nav_items[5].textContent = siteContent["nav"]["nav-item-6"]; 

//change colors
nav_items.forEach(item => item.style.color="green");


//appendChild
const new_anchor = document.createElement('a'); 
const link1 = document.createTextNode('Blog');
new_anchor.appendChild(link1);

const new_anchor2= document.createElement('a'); 
const link2 = document.createTextNode('Careers');
new_anchor2.appendChild(link2);

document.querySelector('nav').appendChild(new_anchor);
document.querySelector('nav').prepend(new_anchor2);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//h1
const h1 = document.querySelector('h1');

h1.textContent= siteContent["cta"]['h1'];
h1.style.wordSpacing = '600px';

//button
const button = document.querySelector('button'); 
button.textContent = siteContent["cta"]["button"]; 

//all h4 and p elements on the page
const h4 = document.querySelectorAll('h4');
const p = document.querySelectorAll('p'); 


//features

h4[0].textContent = siteContent['main-content']['features-h4']; 
p[0].textContent = siteContent['main-content']['features-content']; 


//About

h4[1].textContent = siteContent['main-content']['about-h4']; 
p[1].textContent = siteContent['main-content']['about-content']; 

//services
h4[2].textContent = siteContent['main-content']['services-h4']; 
p[2].textContent = siteContent['main-content']['services-content']; 

//product
h4[3].textContent = siteContent['main-content']['product-h4'];
p[3].textContent = siteContent['main-content']['product-content'];

//vision
h4[4].textContent = siteContent['main-content']['vision-h4'];
p[4].textContent = siteContent['main-content']['vision-content'];



//contact
h4[5].textContent = siteContent['contact']['contact-h4']; 
p[5].textContent = siteContent['contact']['address'];
 
p[6].textContent = siteContent['contact']['phone'];
p[7].textContent = siteContent['contact']['email'];

//footer

p[8].textContent = siteContent['footer']['copyright'];


//eventlistener

button.addEventListener('click', () =>{ console.log("button was clicked")}); 

//turns anchor tag back to original color
button.addEventListener('click', () => {nav_items.forEach((item) => item.style.color= "#b0b0b0")});