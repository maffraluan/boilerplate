import { CharacterModel } from '~/app/domain/models'

export const CHARACTER_REDUCER_KEY = {
  TOGGLE_FAVORITE_CHARACTER: '@character/toggleFavoriteCharacter'
}

export const CHARACTER_REDUCER_INITIAL_STATE: CharacterSliceType = {
  character: []
}

export type CharacterSliceType = {
  character: CharacterModel[]
}
