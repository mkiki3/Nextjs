//http://localhost:3000/api/CRUD
import {usersData} from '../../../data/data'

export default function handler(req, res) {

    if( req.method == 'GET'){
        console.log(req.method)
        res.status(200).json(usersData)
    }
    else if (req.method == 'POST'){
        console.log(req.method + 'method')
        const email = req.body.email
        const test = req.body
        console.log('email' + email)
        console.log('body' + JSON.stringify(test) )
        const newUser = {
            "firstName": "Temp",
            "lastName": "Temp",
            "email": email,
            "role": "User",
            "id": 4,
            "dateCreated": "2021-04-08T05:33:05.184Z",
            "dateUpdated": "2021-04-08T05:33:05.184Z"
        }
        usersData.push(newUser)
        res.status(200).json(newUser)
    }
  
}
