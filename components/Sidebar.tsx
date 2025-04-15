import { useState } from 'react';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <aside className={`bg-indigo-800 text-white w-64 min-h-full p-4 fixed md:static inset-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out z-50 md:z-auto md:translate-x-0`}>
      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className={`p-2 rounded ${selected === 'Dashboard' ? 'bg-indigo-600' : 'hover:bg-indigo-700'}`}
          onClick={() => {
            setSelected('Dashboard');
            toggleSidebar();
          }}
        >
          Dashboard
        </a>
        <a
          href="#"
          className={`p-2 rounded ${selected === 'Settings' ? 'bg-indigo-600' : 'hover:bg-indigo-700'}`}
          onClick={() => {
            setSelected('Settings');
            toggleSidebar();
          }}
        >
          Settings
        </a>
        <a
          href="#"
          className={`p-2 rounded ${selected === 'Profile' ? 'bg-indigo-600' : 'hover:bg-indigo-700'}`}
          onClick={() => {
            setSelected('Profile');
            toggleSidebar();
          }}
        >
          Profile
        </a>
      </nav>
    </aside>
  );
}
