import HomePage from "./Pages/HomePage"
import LogInPage from "./Pages/LogInPage"
import PaymentPage from "./Pages/PaymentPage"
import PaymentPage2 from "./Pages/PaymentPage2"
import SingUpPage from "./Pages/SingUpPage"
import NavBar from "./components/NavBar"
import { Link, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <div className=" overflow-hidden">
        <NavBar />
        <Link to={'https://wa.me/+940751336007'}><svg className=" fixed right-10 bottom-14 z-20 animate-bounce text-white bg-teal-700 rounded-full p-0.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"></path></svg></Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singUp" element={<SingUpPage />} />
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/Payment" element={<PaymentPage />} />
          <Route path="/Payment2" element={<PaymentPage2 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
