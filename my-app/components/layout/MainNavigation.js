export default function MainNavigation(){
    return(
        <header>
            <div>React MeetUps </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}