import {useRef} from 'react'

//import Card from '../ui/Card'
//import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
        e.preventDefault()
    }
}