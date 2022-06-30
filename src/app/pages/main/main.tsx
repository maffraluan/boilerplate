import React, { useState, useCallback, useMemo, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Input,
  Loader,
  Badge,
  Pagination,
  Box,
  Burger,
  Drawer
} from '@mantine/core'
import { useGetAllCharactersQuery } from '~/store/features/character/api/character-api'
import { CharacterModel } from '~/app/domain/models'

import { useStyles } from './main-styles'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const Main = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [opened, setOpened] = useState<boolean>(false)
  const [page, onChange] = useState<number>(1)
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const navigate = useNavigate()
  const { data, isLoading } = useGetAllCharactersQuery(page)

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
      <Box className={classes.header}>
        <img
          width={80}
          height={80}
          src='https://pt.apkshki.com/storage/6182/icon_5f563b54cb9c8_6182_w256.png'
          alt='Rick and Morty'
        />
        <Box>
          <Burger
            color='#fff'
            opened={opened}
            onClick={() => setOpened((o) => !o)}
          />
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title='Favorites'
            padding='xl'
            size='xl'
            position='right'
          >
            nada
          </Drawer>
        </Box>
      </Box>
      <div style={{ marginTop: 40, marginBottom: 35 }}>
        <Input
          sx={{
            width: 340
          }}
          placeholder='Search for a character or species'
          type='text'
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
      <div className={classes.content}>
        {isLoading ? (
          <Loader />
        ) : (
          filteredCharacters?.map((character: CharacterModel) => {
            return (
              <div key={character.id}>
                <div style={{ width: 340, margin: '10px' }}>
                  <Card shadow='sm' p='lg'>
                    <Card.Section>
                      <Image
                        src={character.image}
                        height={300}
                        alt='Character Image'
                      />
                    </Card.Section>

                    <Group
                      position='left'
                      style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                      <Text weight={500}>{character.name}</Text>
                    </Group>

                    <Group
                      position='left'
                      style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                      <Text weight={500}>Specie</Text>
                      <Badge color='gray' variant='outline'>
                        {character.species}
                      </Badge>
                    </Group>

                    <Button
                      variant='light'
                      color='blue'
                      fullWidth
                      style={{ marginTop: 14 }}
                      onClick={() =>
                        navigate(`/character/${character.id}`, {
                          replace: true
                        })
                      }
                    >
                      Read more
                    </Button>
                  </Card>
                </div>
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
