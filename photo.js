class Photo {
  constructor(title, url, caption, favorite) {
    this.id = Date.now();
    this.title = title;
    this.url = url;
    this.caption = caption;
    this.favorite = favorite || false;
  }

  saveToStorage(array) {
    localStorage.setItem("photoCard", JSON.stringify(array))
    // add s for plural more than once card
  }

  // deleteFromStorage(key) {
  //   localStorage.removeItem(key)
  // }

  updatePhoto() {
    this.favorite = !this.favorite;
  }
}
