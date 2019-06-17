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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/* 
Task 1: Create selectors to point your data
Task 2: Update the HTML with the JSON data
Take 3: Add new content 
  - change color of nav text to be green 
  - use .appendChild() and .prepend()
*/

// nav
const anchors = document.querySelectorAll('a');

anchors[0].textContent = siteContent["nav"]["nav-item-1"];
anchors[1].textContent = siteContent["nav"]["nav-item-2"];
anchors[2].textContent = siteContent["nav"]["nav-item-3"];
anchors[3].textContent = siteContent["nav"]["nav-item-4"];
anchors[4].textContent = siteContent["nav"]["nav-item-5"];
anchors[5].textContent = siteContent["nav"]["nav-item-6"];

// h1
const h1Text = document.querySelector('h1');
//h1Text.textContent = siteContent["cta"]['h1'];
h1Text.textContent = "DOM"
const newBr = document.createElement("BR");
h1Text.appendChild(newBr);

const y = document.createTextNode("is");
h1Text.appendChild(y);

const newBr2 = document.createElement("BR");
h1Text.appendChild(newBr2);
const z = document.createTextNode("awesome");
h1Text.appendChild(z);

// h1 button
const btn = document.querySelector('button');
btn.textContent = siteContent["cta"]["button"];

// code-image
const codeImage = document.getElementById("cta-img" );
codeImage.setAttribute('src', siteContent["cta"]["img-src"]);

// top-content
// h4
const h4Content = document.querySelectorAll('h4');
h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];
h4Content[5].textContent = siteContent["contact"]["contact-h4"];

// p content
const pContent = document.querySelectorAll('p');
pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];

pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];
pContent[8].textContent = siteContent["footer"]["copyright"];

// middle-img
const midImag = document.getElementById("middle-img" );
midImag.src = siteContent["main-content"]["middle-img-src"];

// fix address
const contact2 = document.createTextNode("Somewhere, USA")
const newBr3 = document.createElement("BR");

pContent[5].textContent = "123 Way 456 Street";
pContent[5].appendChild(newBr3);
pContent[5].appendChild(contact2);


// change color of nav text to be green 
anchors.forEach( a => a.style.color = "green");

// add two new items to nav
const si = document.createElement("a");
si.textContent = "Sign In";
const nav = document.querySelector('nav')
nav.appendChild(si).style.color = "green";

const su = document.createElement("a");
su.textContent = "Sign Up";
nav.appendChild(su).style.color = "green";

btn.addEventListener('click', () => alert(`Let's get started!`)); 