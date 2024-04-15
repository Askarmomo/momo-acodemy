import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SingUpPage from './Pages/SingUpPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }

    ]
  },
  {
    path: 'sing up',
    element: <SingUpPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />

)
