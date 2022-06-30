import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  pagination: {
    margin: '30px 0px'
  }
}))
