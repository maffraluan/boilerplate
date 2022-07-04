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
