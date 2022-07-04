export type CharacterModel = {
  id: number
  name: string
  image: string
  species: string
  gender: string
  episode: { [key: string]: string }
  created: string
  status: string
}
