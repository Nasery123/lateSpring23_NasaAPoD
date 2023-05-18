import { AppState } from "../AppState.js"
import { nasaService } from "../services/NasaService.js"
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// NOTE DRAW THE PHOTO OF THE DAY AFTER OUR APPSTATE IS POPULATED
function _drawPicture() {
  // NOTE ALIAS OUT THE PICTURE FOR EASIER READABILITY
  const picture = AppState.nasaPicture
  // NOTE THIS IS A UNIQUE WAY TO CHANGE THE BACKGROUND IMAGE OF THE BODY
  document.body.style.backgroundImage = `url(${picture.imgUrl})`
  // NOTE LASTLY, MAKE SURE YOU FILL IN THE PHOTO INFO INTO YOUR HTML
  setHTML('pictureInformation', picture.NasaPictureTemplate)
}
export class NasaController {
  constructor() {
    console.log('Hello from NASA')
    // NOTE GO AND GET THE PHOTO OF THE DAY ON PAGE LOAD
    this.getPictureOfDay()
    // NOTE DRAW THE PHOTO OF THE DAY AFTER OUR APPSTATE IS POPULATED
    AppState.on('nasaPicture', _drawPicture)
  }

  // NOTE REQUEST A GET METHOD TO GET THE SPECIFIC PICTURE BASED ON IT'S DATE
  async selectDate() {
    try {
      // NOTE GRAB THAT SPECIFIC INPUT
      let dateElem = document.getElementById('date')
      // NOTE THEN ALIAS OUT THAT INPUTS VALUE
      let dateValue = dateElem.value
      console.log('[SELECTING DATE]', dateValue)
      // NOTE MAKE SURE THE VARIABLE YOU'RE PASSING THROUGH IS THE ONE YOU ALIASED
      await nasaService.selectDate(dateValue)
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  // NOTE GRAB THE PICTURE OF THE DAY FROM THE NASA API
  async getPictureOfDay() {
    try {
      await nasaService.getPictureOfDay()
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }
}