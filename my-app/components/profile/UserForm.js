import {useRef} from 'react'

export default function UserForm(props){
    const firstnameInputRef = useRef();
    const lastnameInputRef = useRef();
    const emailInputRef = useRef();
    const roleInputRef = useRef();
    const idInputRef = useRef();

    function submitHandler(e){
        e.preventDefault()
      
        const enteredFirst = firstnameInputRef.current.value
        const enteredLast = lastnameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredRole = roleInputRef.current.value
        const enteredId = idInputRef.current.value

        const userData = {
            first: enteredFirst,
            last: enteredLast,
            email: enteredEmail,
            role: enteredRole,
            id: enteredId
        }

        props.onAddUser(userData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName</label>
                <input type='text' id='firstName' ref={firstnameInputRef}/>
            </div>
            <div>
                <label> LastName</label>
                <input type='text' id='lastName' ref={lastnameInputRef}/>
            </div>
            <div>
                <label> Email</label>
                <input type='text' id='email' ref={emailInputRef}/>
            </div>
            <div>
                <label> Role</label>
                <input type='text' id='role' ref={roleInputRef}/>
            </div>
            <div>
                <label> Id</label>
                <input type='text' id='id_' ref={idInputRef}/>
            </div>
            <button>Submit</button>
        </form>
    )
}