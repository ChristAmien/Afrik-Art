import React from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'

export const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Home />
    </>
  )
}
