'use client'

import { useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import Card from '../components/ui/Card'

import { checkTailwind } from '../utils/tailwind-check'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 p-4 ml-0 md:ml-64 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Vendas" value="R$ 25.000" />
            <Card title="Clientes" value="154" />
            <Card title="Pedidos" value="42" />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}