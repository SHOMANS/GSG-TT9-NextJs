import Link from 'next/link';
import '@/style/globals.css';

export const metadata = {
  title: 'Guest',
};

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <h2>Guest layout</h2>
        <h3>{metadata.title}</h3>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
        {children}
      </div>

      <footer>
        <p>© 2023</p>
      </footer>
    </>
  );
}
