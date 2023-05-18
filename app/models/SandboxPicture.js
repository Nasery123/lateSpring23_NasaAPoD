export class SandboxPicture {
  constructor(data) {
    this.date = data.date
    this.imgUrl = data.imgUrl
    this.id = data.id
    this.creator = data.creator
  }

  get FavoriteTemplate() {
    return /*html*/`
      <div  class="col-2 mt-2 position-relative">
        <img onclick="app.NasaController.getDate('${this.date}')" class="imgHeight selectable mt-2 rounded" src="${this.imgUrl}" alt="">
        <button onclick="app.SandboxController.removeFavorite('${this.id}')" title="Remove Favorite" class="btn btn-danger mt-1 position-absolute top-0 start-0"><i class="mdi mdi-close-outline"></i></button>
      </div>
    `
  }
}