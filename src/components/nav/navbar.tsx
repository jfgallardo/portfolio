import { MenuItem } from '@/types/types';
import { useState } from 'react';

type Props = {
    items: MenuItem[];
    onClick: (item: string) => void;
    activeSection: string;
}

export default function Navbar({ items, onClick, activeSection }: Props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-[69px] w-full flex justify-end items-center gap-[38px] 
                text-white px-6 sm:px-10 md:px-20 lg:px-32 py-4 fixed top-0 z-[5] bg-[#080922]">
    {/* Logo o ícono del menú en móvil */}
   

    {/* Menú principal */}
    <div className="hidden md:flex gap-[38px]">
        {items.map((item) => (
            <div
                className={`px-2 py-6 gap-[10px] 
                    ${activeSection === item.value ? 'border-b-4 border-[#528BFD]' : ''}`}
                key={item.name}
            >
                <button
                    onClick={() => onClick(item.value)}
                    className={`${
                        activeSection === item.value
                            ? 'text-[#528BFD] cursor-pointer'
                            : 'text-sm bg-transparent border-none text-white hover:bg-[#080922] cursor-pointer'
                    }`}
                >
                    {item.name}
                </button>
            </div>
        ))}
    </div>

    {/* Menú hamburguesa (móvil) */}
    <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
            {/* Ícono de menú hamburguesa */}
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    </div>

    {/* Menú desplegable (visible solo cuando se activa el menú hamburguesa) */}
    <div
        className={`absolute top-[69px] right-0 bg-[#080922] w-full flex flex-col items-start gap-2 p-4 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
    >
        {items.map((item) => (
            <div
                className={`w-full px-2 py-2 ${activeSection === item.value ? 'border-l-4 border-[#528BFD]' : ''}`}
                key={item.name}
            >
                <button
                    onClick={() => {
                        onClick(item.value);
                        toggleMenu(); // Cierra el menú al seleccionar una opción
                    }}
                    className={`w-full text-left ${
                        activeSection === item.value
                            ? 'text-[#528BFD]'
                            : 'text-sm bg-transparent border-none text-white hover:bg-[#080922'
                    }`}
                >
                    {item.name}
                </button>
            </div>
        ))}
    </div>
</nav>

    )
}