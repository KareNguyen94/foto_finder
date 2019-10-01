var searchInput = document.querySelector(".search-bar");
var searchButton = document.querySelector(".search-button");
var titleInput = document.querySelector(".title-input");
var captionInput = document.querySelector(".caption-input");
var chooseFileButton = document.getElementById("file");
var addToAlbumButton = document.querySelector(".add-to-album-button")
var photoCardTitle = document.getElementById("photo-title");
var photoCardFile = document.getElementById("photo");
var photoCardCaption = document.getElementById("caption-title");
var deleteCard = document.getElementById("remove-card");
var favoriteCard = document.getElementById("favorite-card");
var parentContainer = document.getElementById("main-empty");
var photoArray = [];


// searchButton.addEventListener("click" );
addToAlbumButton.addEventListener("click", addToClick);
// parentContainer.addEventListener("click" );

// function onSearchClick() {
//
// }
//
// function onCardClick() {
//
// }

function addToClick() {
  instantiateCard();
}

function instantiateCard() {
  var photo = new Photo(titleInput.value, captionInput.value);
  photoArray.push(photo);
  createCard(photo);
}

function createCard(photo) {
  var photoCardHtml = `
      <div class="img-card">
      <p id="photo-title" class="img-title">${photo.title}</p>
      <p id="photo" class="user-img">${photo.file}</p>
      <p id="caption-title" class="img-caption">${photo.caption}</p>
      <div class="img-footer">
        <img id="remove-card" class="trash-icon" src="assets/delete.svg" alt="Trashcan icon">
        <img id="favorite-card" class="heart-icon" src="assets/favorite.svg" alt="Heart icon">
      </div>
    </div>`
    parentContainer.insertAdjacentHTML("afterBegin", photoCardHtml)
}
