import styles from './styles.module.css';

type Props = {
    value: string
    skill: string
}

export default function Skill({ value, skill }: Props) {
    return (
        <div className='flex flex-col items-center text-white w-full max-w-[468px] gap-4 sm:gap-6 md:gap-8'>
            <div className='flex items-center justify-between gap-4 w-full text-center'>
                <p className='text-sm sm:text-base md:text-lg'>{skill}</p>
                <p className='text-sm sm:text-base md:text-lg'>{value}%</p>
            </div>
            <progress
                className={`w-full h-2 sm:h-3 md:h-4 bg-gray-700 rounded-md ${styles.progress}`}
                value={value}
                max="100">
            </progress>
        </div>

    )
}