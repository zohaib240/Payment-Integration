import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout.jsx";
import Home from './pages/Home.jsx'
import Cancel from './pages/Cancel.jsx'
import Success from './pages/success.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
   {
     path : "/",
    element : <Home />,
    },
    {
      path : "success",
     element : <Success />,
    },
    {
      path : "cancel",
     element : <Cancel />,
    }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
