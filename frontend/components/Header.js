import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className='bar'>
        <Link href='/'>
          <h1>Sick fits</h1>
        </Link>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <Nav />
    </header>
  )
}
