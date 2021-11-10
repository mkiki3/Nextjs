//http://localhost:3000/api/user/1
import { usersRepo } from "../../../../helper/user-repo";

export default function handler(req, res) {
  //console.log(req.method)
    switch (req.method) {
        case 'GET':
            return getUserById();
        case 'PUT':
            return updateUser();
        case 'DELETE':
            return deleteUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUserById() {
        console.log(' (2) test index')
        const user = usersRepo.getById(req.query.id);
        return res.status(200).json(user);
    }

    function updateUser() {
        try {
            usersRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteUser() {
        usersRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}