import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'

import RepositoryList from './RepositoryList'
import LogIn from '../pages/Login'
import AppBar from './AppBar'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<LogIn />} />
      </Routes>
    </View>
  )
}

export default Main
