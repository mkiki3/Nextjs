import {useRef} from 'react'

//import Card from '../ui/Card'
//import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
        e.preventDefault()
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            decsription: enteredDescription
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>MeetUp Title</label>
                <input type='text' id='title' ref={titleInputRef}/>
            </div>
            <div>
                <label> Image</label>
                <input type='text' id='image' ref={imageInputRef}/>
            </div>
            <div>
                <label> Address</label>
                <input type='text' id='address' ref={addressInputRef}/>
            </div>
            <div>
                <label> Description</label>
                <input type='text' id='description' ref={descriptionInputRef}/>
            </div>
            <button>Submit</button>
        </form>
    )
}