import UserItem from './UserItem'

export default function UserList (props){
    return(
        <ul>
        {props.users.map((user) => (
            <UserItem
            key={user.id}
            id={user.id}
            first={user.first}
            last={user.last}
            email={user.email}
            role={user.role}
            />
        ))}
        </ul>
    )
}