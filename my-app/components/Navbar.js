import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
      <div>
     <ul>
      <li>
        <Link href="/Home" passHref>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About" passHref>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Blog" passHref>
          <a>Blog Post</a>
        </Link>
      </li>
      </ul>
      </div>
    )
  }
  