import { MenuItem } from '@/types/types';

type Props = {
    items: MenuItem[];
    onClick: (item: string) => void;
    activeSection: string;
}

export default function Navbar({ items, onClick, activeSection }: Props) {

    return (
        <nav className='h-[69px] w-full flex justify-end items-center gap-[38px] 
                     text-white px-32 py-6 fixed top-0  z-[5] bg-[#080922]'>
            {items.map((item) => (
                <div className={`px-2 py-6 gap-[10px] 
                                ${activeSection === item.value ?
                        'border-b-4 border-[#528BFD]'
                        : ''}`}
                    key={item.name}>
                    <button
                        onClick={() => onClick(item.value)}
                        className={`${activeSection === item.value ?
                            ' text-[#528BFD] cursor-pointer'
                            : 'text-sm bg-transparent border-none text-white hover:bg-navbar-background-color cursor-pointer'}`}
                    >{item.name}</button>
                </div>
            ))}
        </nav>
    )
}