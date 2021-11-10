//http://localhost:3000/m1
import {Fragment} from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

export default function MeetupDetails(){
return <Fragment>
    <MeetupDetail
        image='https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons.jpg'
        title='Meetup 1'
        address='Address 1'
        description='The meetup description...'
    />
</Fragment>
}