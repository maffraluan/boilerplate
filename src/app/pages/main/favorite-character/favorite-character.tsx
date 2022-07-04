import { useCallback, useState } from 'react'
import { Box, Button, Center } from '@mantine/core'
import { CharacterModel } from '~/app/domain/models'
import { useGetLocalStorage } from '~/app/hooks'
import { CharacterList } from '../components'

import { useStyles } from './favorite-character-styles'

const FavoriteCharacter = () => {
  const [favoritedCharacters, setFavoritedCharacters] = useState<
    CharacterModel[]
  >([])
  const { classes } = useStyles()
  const character = useGetLocalStorage<CharacterModel>('favoriteCharacters')

  const handleRemoveAll = useCallback(() => {
    localStorage.removeItem('favoriteCharacters')

    setFavoritedCharacters([])
  }, [favoritedCharacters])

  return (
    <Box className={classes.root}>
      <Center className={classes.center}>
        <Box className={classes.box}>
          <Box className={classes.boxButton}>
            {character?.length ? (
              <Button onClick={handleRemoveAll}>Remove all</Button>
            ) : (
              <div>No chars</div>
            )}
          </Box>
          {character?.map((char: CharacterModel) => (
            <CharacterList key={char.id} character={char} />
          ))}
        </Box>
      </Center>
    </Box>
  )
}

export default FavoriteCharacter
