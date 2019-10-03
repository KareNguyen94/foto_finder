var searchInput = document.querySelector(".search-bar");
var searchButton = document.querySelector(".search-button");
var titleInput = document.querySelector(".title-input");
var urlInput = document.querySelector(".url-input");
var captionInput = document.querySelector(".caption-input");
var addToAlbumButton = document.querySelector(".add-to-album-button")
var photoCardTitle = document.getElementById("photo-title");
var photoCardUrl = document.getElementById("photo-url");
var photoCardCaption = document.getElementById("caption-title");
var deleteCard = document.getElementById("remove-card");
var favoriteCard = document.getElementById("favorite-card");
var parentContainer = document.getElementById("main-empty");
var photoArray = [];

// refactor global variables and throw them in the function its being used

addToAlbumButton.addEventListener("click", addToClick);
parentContainer.addEventListener("click", onCardClick);

function onCardClick() {
    if (event.target.classList.contains("trash-icon")) {
        deletePhoto(event);
  } else {
      styleHeartIcon(event);
  }
}


function addToClick() {
  var newPhoto = instantiatePhoto();
  // why am i able to use this variable
}

function instantiatePhoto() {
  var photo = new Photo(titleInput.value, urlInput.value, captionInput.value);
  photoArray.push(photo);
  createCard(photo);
}

function createCard(newPhoto) {
  var photoCardHtml = `
    <section id="${newPhoto.id}" class="img-card">
      <div>
      <p id="photo-title" class="img-title">${newPhoto.title}</p>
      <img id="image" src="${newPhoto.url}">
      <p id="caption-title" class="img-caption">${newPhoto.caption}</p>
      <div class="img-footer">
        <img id="remove-card" class="trash-icon" src="assets/delete.svg" alt="Trashcan icon">
        <img id="favorite-card" class="heart-icon" src="assets/favorite.svg" alt="Heart icon">
      </div>
    </div>
  <section>`
    parentContainer.insertAdjacentHTML("beforeEnd", photoCardHtml)
}

function deletePhoto(event) {
   event.target.closest("section").remove();
}

  // debugger;
function findIndexOfPhoto(event) {
  var photoId = parseInt(event.target.closest(".img-card").id)
    for (var i = 0; i < photoArray.length; i++) {
      if (photoArray[i].id === photoId) {
        return photoArray[i];
      }
    }
}

function styleHeartIcon(event) {
  var hiddenObj = findIndexOfPhoto(event);
    hiddenObj.updatePhoto();
  if (hiddenObj.favorite) {
    event.target.src = "assets/favorite-active.svg";
  } else {
    event.target.src = "assets/favorite.svg";
  }
}
