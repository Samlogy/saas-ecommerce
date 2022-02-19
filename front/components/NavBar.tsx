
import Link from 'next/link'

const NavBar = () => {
    return (
      <div>
        <Link href="/"> Home </Link> 
        <Link href="/about"> About </Link>    
        <Link href="/contact"> Contact us </Link>    
      </div>
    )
}


export default NavBar;