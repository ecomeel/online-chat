import { Routes, Route } from 'react-router-dom'

import Main from '@/pages/Main'
import Chat from '@/pages/Chat'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={ <Main /> } path="/" />
      <Route element={ <Chat /> } path="/chat" />
    </Routes>
  )
}

export default AppRoutes