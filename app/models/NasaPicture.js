export class NasaPicture{
  constructor(data) {
    this.date = data.date
    this.description = data.explanation
    this.title = data.title
    this.imgUrl = data.hdurl
  }

  get NasaPictureTemplate() {
    return /*html*/ `
    <div class="col-6 text-light ">
        <div class="pictureTitle text-end">
          <h1>${this.title}</h1>
          <h2>${this.date}</h2>
        </div>
        <div class="pictureDescription p-3 text-start">
          <p>${this.description}</p>
        </div>
      </div>
    `
  }
}