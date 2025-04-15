'use client'

import { Menu } from 'lucide-react'

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white shadow p-4 fixed w-full z-10">
      <button 
        onClick={onMenuClick}
        className="md:hidden text-gray-600"
      >
        <Menu size={24} />
      </button>
    </header>
  )
}