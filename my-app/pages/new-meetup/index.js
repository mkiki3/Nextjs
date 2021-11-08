//our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage(){
    function addMeetupHabdler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
        return <NewMeetupForm onAddMeetup={addMeetupHabdler}/>
}