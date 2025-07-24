import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersListApp from './components/users_list/UsersListApp'
import CounterApp from './components/counter_app/CounterApp'
import HotelApp from './components/hotel_app/HotelApp'
import TogglingApp from './components/toggling_app/TogglingApp'
import ArithmeticApp from './components/arithmetic_app/ArithmeticApp'
import MirrorImage from './components/mirror_iamge/MirrorImage'
import DummyJsonEcommerseApp from './components/dummy_json_ecommerse_app/DummyJsonEcommerseApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h3>Hi</h3> */}
      {/* <UsersListApp></UsersListApp> */}
      {/* <CounterApp></CounterApp> */}
      <DummyJsonEcommerseApp></DummyJsonEcommerseApp>
      {/* <HotelApp></HotelApp> */}
      {/* <TogglingApp></TogglingApp> */}
      {/* <ArithmeticApp></ArithmeticApp> */}
      {/* <MirrorImage></MirrorImage> */}
      
    </>
  )
}

export default App
