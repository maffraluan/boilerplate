import { Box, Burger, Drawer } from '@mantine/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './header-styles'

type HeaderProps = {
  favoriteTitle: string
}

const Header = ({ favoriteTitle }: HeaderProps) => {
  const [opened, setOpened] = useState<boolean>(false)
  const { classes } = useStyles()
  return (
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
          title='Favorite characters'
          padding='xl'
          size='xl'
          position='right'
        >
          <Link to='/favorite-character' className={classes.link}>
            {favoriteTitle}
          </Link>
        </Drawer>
      </Box>
    </Box>
  )
}

export default Header
