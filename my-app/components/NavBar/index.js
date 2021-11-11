//import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
      <div>
      <ul>
       <li>
         <Link href="/home" passHref>
           <a>Home</a>
         </Link>
       </li>
       <li>
         <Link href="/about" passHref>
           <a>About Us</a>
         </Link>
       </li>
       <li>
         <Link href="/blog" passHref>
           <a>Blog Post</a>
         </Link>
       </li>
       </ul>
       </div>
    )
  }
  
