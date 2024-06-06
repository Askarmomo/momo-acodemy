import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SingUpPage from './Pages/SingUpPage.jsx'
import LogInPage from './Pages/LogInPage.jsx'
import PaymentPage from './Pages/PaymentPage.jsx'
import PaymentPage2 from './Pages/PaymentPage2.jsx'

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
    path: '/singUp',
    element: <SingUpPage />
  },
  {
    path: '/logIn',
    element: <LogInPage />
  },
  {
    path: '/Payment',
    element: <PaymentPage />
  },
  {
    path: '/Payment2',
    element: <PaymentPage2/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />

)
