import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haico | Urbanización y Tecnología',
  description: 'Desarrollamos proyectos urbanos con tecnología de punta.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
