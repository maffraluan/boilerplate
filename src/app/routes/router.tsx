import { Routes, Route, Navigate } from 'react-router-dom'

import { Main, Character, FavoriteCharacter } from '~/app/pages/'

const Router = () => {
  return (
    <Routes>
      <Route path='character' element={<Main />} />
      <Route path='character/:id' element={<Character />} />
      <Route path='favorite-character' element={<FavoriteCharacter />} />
      <Route path='*' element={<Navigate to='character' />} />
    </Routes>
  )
}

export default Router
