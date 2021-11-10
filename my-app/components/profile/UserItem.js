import {useRouter} from 'next/router'
export default function UserItem(props){
    const router = useRouter()

    function showDetailsHandler(){
        router.push('/' + props.id)
    }

    return(
        <li>
            <div> 
                <div>{props.first}</div>
                <div>{props.last}</div>
            </div>
            <div>
               <div> {props.email}</div>
            </div>
            <div>
                <div>{props.role}</div>
                <div>{props.id}</div>
            </div>
        </li>
    )
}