import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme
} from '@mantine/core'
import { CharacterModel } from '~/app/domain/models'

type CharacterProps = {
  character: CharacterModel
}

const CharacterList = ({ character }: CharacterProps) => {
  const theme = useMantineTheme()
  const navigate = useNavigate()

  return (
    <Box>
      <div key={character.id}>
        <Box m={10}>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image src={character.image} height={300} alt='Character Image' />
            </Card.Section>

            <Group position='left' mb={5} mt={theme.spacing.sm}>
              <Text weight={500}>{character.name}</Text>
            </Group>

            <Group position='left' mb={5} mt={theme.spacing.sm}>
              <Text weight={500}>Specie</Text>
              <Badge color='gray' variant='outline'>
                {character.species}
              </Badge>
            </Group>
            <Button
              variant='light'
              color='blue'
              fullWidth
              mt={14}
              onClick={() =>
                navigate(`/character/${character.id}`, {
                  replace: true
                })
              }
            >
              Read more
            </Button>
          </Card>
        </Box>
      </div>
    </Box>
  )
}

export default CharacterList
