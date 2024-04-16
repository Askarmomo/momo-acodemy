import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SingUpPage from './Pages/SingUpPage.jsx'
import LogInPage from './Pages/LogInPage.jsx'

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
  },
  {
    path: 'log in',
    element: <LogInPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />

)
