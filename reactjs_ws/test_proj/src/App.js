import logo from './logo.svg';
import './App.css';
import UsersListApp from './components/users_list_app/UsersListApp';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <UsersListApp></UsersListApp>
    </div>
  );
}

export default App;
