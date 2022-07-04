import React, { useState, useCallback, useMemo, memo } from 'react'
import { Input, Loader, Pagination, Box } from '@mantine/core'
import { useGetAllCharactersQuery } from '~/store/features/character/api/character-api'
import { CharacterModel } from '~/app/domain/models'

import { useStyles } from './main-styles'
import { useGetLocalStorage } from '~/app/hooks'
import { CharacterList } from './components'
import { Header } from '~/app/components'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const Main = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [page, onChange] = useState<number>(1)
  const { classes } = useStyles()
  const { data, isLoading } = useGetAllCharactersQuery(page)

  const getFavoriteCharacters = useMemo(() => {
    return useGetLocalStorage<CharacterModel>('favoriteCharacters')
  }, [])

  const favoriteTitle = useMemo((): string => {
    if (getFavoriteCharacters?.length > 1) {
      return `${getFavoriteCharacters?.length} characters`
    }

    return `${getFavoriteCharacters?.length ?? 0} character`
  }, [getFavoriteCharacters])

  const filteredCharacters = useMemo(
    () =>
      data?.results.filter(
        (character: CharacterModel) =>
          character.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          character.species.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [data, inputValue]
  )

  const handleOnChange = useCallback((event: InputChangeEvent) => {
    setInputValue(event.target.value)
  }, [])

  return (
    <div className={classes.root}>
      <Header favoriteTitle={favoriteTitle} />
      <Box mt={40} mb={35}>
        <Input
          sx={{
            width: 340
          }}
          placeholder='Search for a character or species'
          type='text'
          value={inputValue}
          onChange={handleOnChange}
        />
      </Box>
      <div className={classes.content}>
        {isLoading ? (
          <Loader />
        ) : (
          filteredCharacters?.map((character: CharacterModel) => {
            return (
              <div key={character.id}>
                <Box m={10}>
                  <CharacterList character={character} />
                </Box>
              </div>
            )
          })
        )}
      </div>
      <div className={classes.pagination}>
        {filteredCharacters?.length > 1 && (
          <Pagination
            page={page}
            onChange={onChange}
            total={data?.info?.pages}
          />
        )}
      </div>
    </div>
  )
}
export default memo(Main)
