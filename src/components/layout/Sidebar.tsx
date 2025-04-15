'use client'

import { X, Home, Users, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="p-4 flex justify-end md:hidden">
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 mt-4">
          <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <Home size={18} /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded mt-2">
            <Users size={18} /> Clientes
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded mt-2">
            <ShoppingCart size={18} /> Vendas
          </Link>
        </nav>
      </aside>
    </>
  )
}