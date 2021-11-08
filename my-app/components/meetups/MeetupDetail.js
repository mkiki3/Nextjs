import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import {Fragment} from 'react'
export default function MeetupDetails(props){
return <Fragment>
    <img src={props.image}
      alt={props.title}></img>
      <h1>{props.title}</h1>
      <address>{props.title}</address>
      <p>{props.description}</p>
</Fragment>
}