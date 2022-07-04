import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    backgroundColor: '#1a1815',

    '& > img': {
      marginLeft: 30,
      padding: 10
    },

    '& > div': {
      marginRight: 30
    }
  },
  link: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}))
