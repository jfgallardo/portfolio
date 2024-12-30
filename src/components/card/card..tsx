import Button from '../button/button';

type Props = {
    title: string;
    description: string;
    buttonText: string;
    children?: React.ReactNode;
}

export default function Card({ title, description, buttonText, children }: Props) {
    return (
        <div className='flex flex-col gap-8 items-center justify-evenly bg-[#0F1035] 
                        w-[380] h-[505] rounded-md overflow-hidden p-8 transition-transform 
                        transform hover:-translate-y-1 hover:shadow-lg shadow-md duration-300 
                        ease-in-out'>
            <div className='w-[128] h-[128]'>
                {children}
            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h3 className='font-sans text-2xl font-semibold leading-[79px]
                               text-center decoration-skip-ink-none text-white'>{title}</h3>
                <p className='font-sans text-sm font-normal leading-[25px]
                              text-justify text-white decoration-skip-ink-none'>
                    {description}
                </p>
            </div>
            <Button variant='outline' size='md' className='text-[#528BFD] border border-[#528BFD] rounded-md'>
                {buttonText}
            </Button>
        </div>

    )
}