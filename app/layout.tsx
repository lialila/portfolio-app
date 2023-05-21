import './globals.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Uliana Cheklina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <nav>
          <p>Uliana Cheklina</p>
          <ul>
            <li>
              <Link href="#About" className={styles.navlink}>
                About/Intro
              </Link>
            </li>
            <li>
              <Link href="#Projects" className={styles.navlink}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#Skills" className={styles.navlink}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#Contact" className={styles.navlink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
