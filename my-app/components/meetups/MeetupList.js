import MeetUpItem from './MeetUpItem'

export default function MeetUpList (props){
    return(
        <ul>
        {props.meetups.map((meetup) => (
            <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            />
        ))}
        </ul>
    )
}