import { AppState } from "../AppState.js"
import { NasaPicture } from "../models/NasaPicture.js"
import { nasaApi } from "./AxiosService.js"

class NasaService {

// NOTE MAKE SURE YOU HAVE YOUR ARGUMENT PASSED DOWN INTO YOUR PARAMETERS
async selectDate(date) {
  // NOTE MAKE A GET REQUEST TO THE API, AND GRAB THE PHOTO BASED ON THE DATE YOU PASS THROUGH
  const res = await nasaApi.get(`?date=${date}`)
  console.log('[GETTING PICTURE BY DATE]', res.data)
  // NOTE SAVE THAT PHOTO INTO YOUR APPSTATE SO YOU CAN DRAW IT ONTO THE SCREEN
  AppState.nasaPicture = new NasaPicture(res.data)
}

async getPictureOfDay() { 
  // NOTE MAKE A GET REQUEST TO THE API, AND GRAB THE PHOTO OF THE DAY
  const res = await nasaApi.get()
  console.log('[GETTING PICTURE OF THE DAY]', res.data)
  console.log('[CREATING NASA PICTURE]', new NasaPicture(res.data))
  // NOTE SAVE THAT PHOTO INTO YOUR APPSTATE SO YOU CAN DRAW IT ONTO THE SCREEN
  AppState.nasaPicture = new NasaPicture(res.data)
}

}

export const nasaService = new NasaService()