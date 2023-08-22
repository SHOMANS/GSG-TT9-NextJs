import MainLayout from '@/components/layouts/MainLayout';
import '../style/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GSG',
  description: 'description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainLayout>
          <h1>hello from root</h1>
          <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
            {children}
          </div>
        </MainLayout>
      </body>
    </html>
  );
}
