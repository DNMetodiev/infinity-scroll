

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true;

//Unsplash API
let count = 5;
const apiKey = config.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true
    loader.hidden = true
    initialLoad = false;
    count = 30
  }
}

//Helper function for set attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}


//Create Elements for Links and Photos, add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  //Run for each on photosArray
  photosArray.forEach((photo) => {

    const item = document.createElement('a')

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    })
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    //Event listener, check when loading is finished
    img.addEventListener('load', imageLoaded)

    item.appendChild(img);
    imageContainer.appendChild(item);
  })
};

//Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos();
  } catch (error) {

  }
}

// Check if the user at the bottom of the page, if yes load morep photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos()
  }
})

//on load
getPhotos()