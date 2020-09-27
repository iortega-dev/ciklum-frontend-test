import React from 'react'
import { BrowserRouter as RouterProvider} from 'react-router-dom'
// Fonts
import { Typography } from '~Assets/fonts'
// Theme
import Theme from '~Theme'
// Local imports
import Navbar from '~Components/App/Navbar'
import Content from '~Components/App/Content'

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
