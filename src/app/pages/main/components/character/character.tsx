import { useNavigate, useParams } from 'react-router-dom'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import { useGetSingleCharacterQuery } from '~/store/features/character/api/character-api'

const Character = () => {
  const { id } = useParams()
  const { data } = useGetSingleCharacterQuery(id as string)
  const navigate = useNavigate()

  console.log(data)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button onClick={() => navigate('/', { replace: true })}>
        Back to list
      </Button>
      <Card shadow='sm' p='lg'>
        <Card.Section>
          <Image src={data?.image} height={300} alt='Norway' />
        </Card.Section>

        <Group position='apart' style={{ marginTop: 15, marginBottom: 5 }}>
          <Text weight={500}>Name: {data?.name}</Text>
          <Button variant='light'>Add to favorite</Button>
        </Group>

        <Group position='apart' style={{ marginBottom: 5 }}>
          <Text weight={500}>Specie</Text>
          <Badge color='gray' variant='outline'>
            {data?.species}
          </Badge>
        </Group>

        <Group position='left' style={{ marginBottom: 5 }}>
          <Text weight={500}>Status: {data?.status}</Text>
        </Group>

        <Group position='left' style={{ marginBottom: 5 }}>
          <Text weight={500}>Episodes Quantity: {data?.episode.length}</Text>
        </Group>

        <Group position='left' style={{ marginBottom: 5 }}>
          <Text weight={500}>Created Date: {data?.created.slice(0, 10)}</Text>
        </Group>
      </Card>
    </div>
  )
}

export default Character
