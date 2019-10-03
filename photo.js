class Photo {
  constructor(title, url, caption) {
    this.id = Date.now();
    this.title = title;
    this.url = url;
    this.caption = caption;
    this.favorite = false;
  }

  // saveToStorage(array) {
  //   localStorage.setItem()
  // }
  //
  // deleteFromStorage(key) {
  //   localStorage.removeItem(key)
  // }

  updatePhoto() {
    this.favorite = !this.favorite;
  }
}
