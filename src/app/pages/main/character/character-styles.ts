import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  root: {
    backgroundImage: 'url(https://images4.alphacoders.com/936/936813.png)',
    backgroundSize: 'cover'
  },
  center: {
    width: 800,
    minHeight: '100vh',
    height: '100%',
    margin: '0 auto'
  },
  box: {
    backgroundColor: '#ededed',
    width: 600,
    height: 600,
    padding: 20,
    borderRadius: 10
  },
  boxButton: {
    margin: 5,
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    paddingLeft: 120
  }
}))
