import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Applayout/Layout.jsx'
import Home from './Page/Home.jsx'
import Service from './Page/Service.jsx'
import Contact from './Page/Contact.jsx'
import Inquiry from './Page/Inquiry.jsx'

function App() {
  const [count, setCount] = useState(0)
const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/service',
          element: <Service />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/inquiry',
          element: <Inquiry />,
        },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
