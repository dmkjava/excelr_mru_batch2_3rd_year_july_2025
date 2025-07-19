import logo from './logo.svg';
import './App.css';
import UsersListApp from './components/users_list/UsersListApp';
import 'bootstrap/dist/css/bootstrap.css'
import CounterApp from './components/counter_app/CounterApp';
import DummyJsonEcommerseApp from './components/dummy_json_ecommerse_app/DummyJsonEcommerseApp';
import HotelApp from './components/hotel_app/HotelApp';
function App() {
  return (
    <div className="App">
      {/* <h3>Hi</h3> */}
      {/* <UsersListApp></UsersListApp> */}
      {/* <CounterApp></CounterApp> */}
      {/* <DummyJsonEcommerseApp></DummyJsonEcommerseApp> */}
      <HotelApp></HotelApp>
    </div>
  );
}

export default App;
