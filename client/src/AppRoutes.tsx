import { Routes, Route } from 'react-router-dom'

import Main from '@/pages/index'
import Chat from '@/pages/chat'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={ <Main /> } path="/" />
      <Route element={ <Chat /> } path="/chat" />
    </Routes>
  )
}

export default AppRoutes