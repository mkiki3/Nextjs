import { useEffect, useReducer, useState } from 'react'
import users from '../../data/data'
import Head from 'next/head'


export default function DisplayUser (){
    
const [users, setUsers] = useState([])
const [user, setUser] = useState('')
const [email, setEmail] = useState('')

const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/api/CRUD')
    const data = await response.json()
    setUsers(data)
}

const submitUser = async () => {
    const response = await fetch('http://localhost:3000/api/CRUD',{
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await response.json()
    console.log('???')
    console.log(data)
   
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
          
        </div>
    )
}
