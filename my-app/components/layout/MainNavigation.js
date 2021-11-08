import Link from 'next/Link'
export default function MainNavigation(){
    return(
        <header>
            <div>React MeetUps </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/' passHref> All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup' passHref>Add New Meetup</Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}