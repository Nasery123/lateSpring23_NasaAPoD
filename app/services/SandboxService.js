import { AppState } from "../AppState.js"
import { SandboxPicture } from "../models/SandboxPicture.js"
import { api } from "./AxiosService.js"

class SandboxService {

 async getFavoritePictures() {
  const res = await api.get('api/apods')
  console.log('[GETTING FAVORITE PICTURES]', res.data.map(p => new SandboxPicture(p)))
  AppState.favoritePictures = res.data.map(p => new SandboxPicture(p))
 } 

async favoritePicture(favoriteData) {
  const res = await api.post('api/apods', favoriteData)
  console.log('[FAVORITE PICTURE]', res.data)
  AppState.favoritePictures.push(new SandboxPicture(res.data))
  AppState.emit("favoritePictures")
  console.log(AppState.favoritePictures)
}

async removeFavorite(favoriteId) {
  const res = await api.delete(`api/apods/${favoriteId}`)
  console.log('[REMOVING FAVORITE]', res.data)
  console.log('[BEFORE SANDBOX]', AppState.favoritePictures)
  AppState.favoritePictures = AppState.favoritePictures.filter(p => p.id != favoriteId)
  AppState.emit("favoritePictures")
  console.log('[AFTER SANDBOX]', AppState.favoritePictures)

}

}

export const sandboxService = new SandboxService()