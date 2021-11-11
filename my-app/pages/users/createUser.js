import { useEffect, useReducer, useState } from 'react'
import {usersData} from '../../data/data'

export default function DisplayUser (){
    
const [users, setUsers] = useState([])
const [email, setEmail] = useState('')

const [persons, setPersons] = useState([]);
const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    id: usersData.length + 1
})

const addUser = input => {
    setPersons([...persons, { firstName: input.firstName, lastName: input.lastName, email: input.email, role: input.role }]);
    setInput({
    firstName: '',
    lastName: '',
    email: '',
    role: ''});
}

const handleChange = e => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
      });
}

const handleSubmit = e => {
    e.preventDefault();
    addUser(input);
};
console.log("Person object")
console.log(persons);

const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/api/CRUD')
    const data = await response.json()
    setUsers(data)
}

const submitUser = async () => {
    const response = await fetch('http://localhost:3000/api/CRUD',{
        method: 'POST',
        body: JSON.stringify({persons}),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await response.json()
    console.log('submit User')
    console.log(data)
   
}

const PersonForm = ({ handleSubmit,handleChange,input}) => {
        const {firstName, lastName, email, role} = input
        return(
            <form onSubmit={handleSubmit}>
               <div>
                 <input name="firstName" type="text" value={firstName} onChange={handleChange}/>
              </div> 
              <div>
                 <input name="lastName" type="text" value={lastName} onChange={handleChange}/>
              </div> 
              <div>
                 <input name="email" type="text" value={email} onChange={handleChange}/>
              </div> 
              <div>
                 <input name="role" type="text" value={role} onChange={handleChange}/>
              </div> 
              <button type="submit">Add</button>
            </form>
        )
}
    return (
        <div>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={submitUser}> Add users</button> 
            <button onClick={fetchUsers}> Load users</button>
            { users.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id} {user.email}
                    </div>
                )
            })

            }
            <br></br>
            <diiv>User Form</diiv>
            <PersonForm input={input} addUser={addUser} handleSubmit={handleSubmit} handleChange={handleChange}/>
          
        </div>
    )
}
