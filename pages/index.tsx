import { useState } from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Topo */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Corpo: Sidebar + Conteúdo */}
      <div className="flex flex-1">

        {/* Menu Lateral */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Conteúdo */}
        <main className={`flex-1 bg-gray-100 p-6 transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Card 1" content="Conteúdo do card 1." />
            <Card title="Card 2" content="Conteúdo do card 2." />
            <Card title="Card 3" content="Conteúdo do card 3." />
          </div>
        </main>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
