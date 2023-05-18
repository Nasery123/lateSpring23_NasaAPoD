import { AppState } from "../AppState.js"
import { sandboxService } from "../services/SandboxService.js"
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawFavorites() {
  let template = ""
  AppState.favoritePictures.forEach(p => template += p.FavoriteTemplate)
  setHTML('favoritePictures', template)
}

export class SandboxController {
  constructor() {
    console.log("Hello from the Sandbox")
    AppState.on('account', this.getFavoritePictures)
    AppState.on('favoritePictures', _drawFavorites)
  }

  async removeFavorite(favoriteId) {
    try {
      await sandboxService.removeFavorite(favoriteId)
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async getFavoritePictures() {
    try {
      await sandboxService.getFavoritePictures()
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async favoritePicture() {
    try {
      let favoriteData = AppState.nasaPicture
      await sandboxService.favoritePicture(favoriteData)
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }
}