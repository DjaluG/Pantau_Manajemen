// components/Navbar.tsx
import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard"><a>Beranda</a></Link>
        </li>
        <li>
          <Link href="/task"><a>My Task</a></Link>
        </li>
        <li>
          <Link href="/program"><a>My Program</a></Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
