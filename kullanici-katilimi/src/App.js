import { useState } from 'react';
import './App.css';
import * as yup from 'yup';
import Form from './Form';

function App() {

  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <>
      <div className="App">Users </div>
      <ul>
        {
          users.map((user, index) => {
            <li key={index} >  {user.fname} {user.femail}  </li>

          })
        }
      </ul>
      <div> Form</div>
      <Form addUser={addUser} />

    </>

  );
}

export default App;
