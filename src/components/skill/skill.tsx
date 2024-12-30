import styles from './styles.module.css';

type Props = {
    value: string
    skill: string
}

export default function Skill({ value, skill }: Props) {
    return (
        <div className='flex flex-col items-center text-white w-[468px] gap-[15px]'>
            <div className='flex items-center justify-between gap-4 w-full 
                            leading-[11px] text-center'>
                <p>{skill}</p>
                <p>{value}%</p>
            </div>
            <progress className={`${styles.progress} `} value={value} max="100"></progress>
        </div>
    )
}