'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Haico
        </Link>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/nosotros" className="text-gray-600 hover:text-black">Nosotros</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-black">Servicios</Link>
          <Link href="/maquinaria" className="text-gray-600 hover:text-black">Maquinaria</Link>
          <Link href="/proyectos" className="text-gray-600 hover:text-black">Proyectos</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-black">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
