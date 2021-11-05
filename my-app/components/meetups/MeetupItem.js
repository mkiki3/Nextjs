//import Card from '../ui/Card'
//import from './MeetupItem.module.css'

export default function MeetupItem(props){
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