import logo from './logo.svg';
import './App.css';
import UsersListApp from './components/users_list/UsersListApp';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App">
      {/* <h3>Hi</h3> */}
      <UsersListApp></UsersListApp>
    </div>
  );
}

export default App;
