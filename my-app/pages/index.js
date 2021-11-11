import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MeetUpList from '../components/meetups/MeetupList'
import Layout from '../components/layout' 
import UserForm from '../components/profile/UserForm'

// our-domain.com/

const DUMMY_MEETUPS = [
  {
      id: 'm1',
      title: 'Meetup 1',
      image: 'https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons.jpg',
      address: 'Address 1'
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image: 'https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons.jpg',
    address: 'Address 2'
  },
  {
    id: 'm3',
    title: 'Meetup 3',
    image: 'https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons.jpg',
    address: 'Address 3'
  },
  {
    id: 'm4',
    title: 'Meetup 4',
    image: 'https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons.jpg',
    address: 'Address 4'
  }

]

export default function Main() {
  const [loadedMeetups, setloadedMeetups ] = useState([])
  useEffect(() => {
    setloadedMeetups(DUMMY_MEETUPS)
  }, [])
  return (
    <div className={styles.container}>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80" alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
      </div>
      <div class="flex flex-row ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
     
    </div>
    
  )
}



