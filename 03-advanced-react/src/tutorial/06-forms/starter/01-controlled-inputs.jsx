import {useEffect, useState} from "react";
import {data} from "../../../data.js";

// const User = ({id, name, email = 'not found'}) => {
//   return (
//       <div key={id}>
//         <h3>{id} {name}</h3>
//         <p>{email}</p>
//         <button onClick={}>delete</button>
//       </div>
//   )
// }

const ControlledInputs = () => {
  const [usersData, setUsersData] = useState(data)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name || !email) return;
    setUsersData([...usersData, {id: usersData.length + 1, name: name, email: email}])
    data.push({id: usersData.length + 1, name: name, email: email})
    setName('')
    setEmail(' ')
  }

  return <>
    <h2>Controlled Inputs</h2>
    <form className='form' onSubmit={submitHandler}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>

    <h4>Users</h4>
    {
      usersData.map((user) =>
          <div key={user.id}>
            <h3>{user.id} {user.name}</h3>
            <p>{user.email || 'not found'}</p>
            <button onClick={() => setUsersData(usersData.filter(({id}) => id !== user.id))}
                    style={{padding: "5px", border: "1px solid grey", background: 'whitesmoke'}}>
              delete
            </button>
          </div>
      )
    }

  </>;
};
export default ControlledInputs;
