//http://localhost:3000/api/CRUD
import {usersData} from '../../../data/data'

export default function handler(req, res) {

    if( req.method == 'GET'){
        console.log(req.method)
        res.status(200).json(usersData)
    }
    else if (req.method == 'POST'){
        let idTracker = usersData.length;
        let user = req.body.persons[0]
        const newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            id: idTracker + 1,
            dateCreated: "2021-04-08T05:33:05.184Z",
            dateUpdated: "2021-04-08T05:33:05.184Z"
        }
        
        usersData.push(newUser)
        res.status(200).json(newUser)
    }
  
}
