import React from 'react'
import { BrowserRouter as RouterProvider} from 'react-router-dom'
// App Global Styles
import './App.css'
// Fonts
import { Typography } from '~Assets/fonts'
// Theme
import Theme from '~Theme'
// Local imports
import Navbar from '~Components/Navbar'
import Content from '~Components/Content'

function App() {
  return (
    <>
      <Typography />
      <Theme>
        <RouterProvider>
          <Navbar />
          <Content />
        </RouterProvider>
      </Theme>
    </>
  )
}

export default App
