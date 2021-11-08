//import Card from '../ui/Card'
//import from './MeetupItem.module.css'
import {useRouter} from 'next/router'
export default function MeetupItem(props){
    const router = useRouter()
    //1:15:00
    function showDetailsHandler(){
        router.push('/' + props.id)
    }
    return(
        <li>
            <div> 
                <img src={props.image} alt={props.title}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
            </div>
            <div>
                <button>Show Details</button>
            </div>
        </li>
    )
}