//our-domain.com/userlist
import UserForm from '../../components/profile/UserForm'

export default function NewUserPage(){
    function addUserHandler(enteredUserData){
        console.log(enteredUserData)
    }
        return <UserForm onAddUser={addUserHandler}/>
}