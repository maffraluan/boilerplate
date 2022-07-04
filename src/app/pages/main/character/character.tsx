import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Center,
  Box
} from '@mantine/core'
import { useGetSingleCharacterQuery } from '~/store/features/character/'
import { CharacterModel } from '~/app/domain/models'
import { useLocalStorage, useGetLocalStorage } from '~/app/hooks'

import { useStyles } from './character-styles'

const Character = () => {
  const { id } = useParams()
  const { classes } = useStyles()
  const { data } = useGetSingleCharacterQuery(id as string)
  const navigate = useNavigate()

  const favoriteCharacters = useMemo(
    () => useGetLocalStorage<CharacterModel>('favoriteCharacters'),
    []
  )

  const isFavorited = useMemo(
    () =>
      favoriteCharacters?.some(
        (character: CharacterModel) => character.id === Number(id)
      ),
    [id, favoriteCharacters]
  )

  const [favoritedCharacters, setFavoritedCharacters] = useState(isFavorited)

  const handleFavoriteCharacter = useCallback(() => {
    const payload = data as unknown as CharacterModel

    const duplicated = favoriteCharacters?.some(
      (character: CharacterModel) => character.id === payload.id
    )

    if (duplicated) return
    useLocalStorage('favoriteCharacters', payload)
    setFavoritedCharacters(true)
  }, [data, favoriteCharacters])

  return (
    <Box className={classes.root}>
      <Center className={classes.center}>
        <Box className={classes.box}>
          <Box className={classes.boxButton}>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <Text
              size='lg'
              color='primary'
              weight={'bold'}
              className={classes.text}
            >
              {data?.name}
            </Text>
          </Box>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image src={data?.image} height={300} alt='Character' />
            </Card.Section>

            <Group position='apart' mt={15} mb={10}>
              <Text weight={500}>Name: {data?.name}</Text>
              <Button
                variant={favoritedCharacters ? 'filled' : 'light'}
                onClick={handleFavoriteCharacter}
              >
                {favoritedCharacters ? 'Favorited' : 'Favorite'}
              </Button>
            </Group>

            <Group position='apart' mb={5}>
              <Text weight={500}>Specie</Text>
              <Badge color='gray' variant='outline'>
                {data?.species}
              </Badge>
            </Group>

            <Group position='left' mb={5}>
              <Text weight={500}>Status: {data?.status}</Text>
            </Group>

            <Group position='left' mb={5}>
              <Text weight={500}>
                Episodes Quantity: {data?.episode.length}
              </Text>
            </Group>

            <Group position='left' mb={5}>
              <Text weight={500}>
                Created Date: {data?.created.slice(0, 10)}
              </Text>
            </Group>
          </Card>
        </Box>
      </Center>
    </Box>
  )
}

export default Character
