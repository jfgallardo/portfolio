import type { Dictionary, SkillType } from "@/types/types";
import Button from "@/components/button/button";
import Skill from "@/components/skill/skill";
import styles from "./styles.module.css";

type Props = {
    translations: Dictionary
};

const skills: SkillType[] = [
    { skill: "HTML", value: '100' },
    { skill: "CSS", value: '100' },
    { skill: "JavaScript", value: '100' },
    { skill: "React", value: '80' },
    { skill: "Node.js", value: '70' },
    { skill: "MongoDB", value: '70' },
    { skill: "Git", value: '80' },
    { skill: "Figma", value: '80' },
    { skill: "Laravel", value: '80' },
    { skill: "Bootstrap", value: '90' },
    { skill: "Tailwind", value: '80' },
    { skill: "PHP", value: '80' },
    { skill: "MySQL", value: '60' },
    { skill: "PostgreSQL", value: '60' },
    { skill: "SQLite", value: '60' },
    { skill: "CYPRESS.IO", value: '60' },
    { skill: "APIWORK", value: '90' },
    { skill: "Teamwork", value: '100' },
    { skill: "Communication", value: '100' },
    { skill: "NestJs", value: '70' },
    { skill: "Express", value: '70' },
    { skill: "VueJs", value: '80' },
    { skill: "NextJs", value: '70' },
    { skill: "NuxtJs", value: '70' },

];

export function SkillsView({ translations }: Props) {
    return (
        <div className='bg-[#020312] flex flex-col items-center p-8 w-full' id='skills'>
            <div className="w-full max-w-[1400px]">
                <h1 className='text-[48px] font-semibold leading-[79px] text-center text-[#528BFD] mb-4'>{translations.skills.title}</h1>
                <div className='flex items-center justify-center gap-8 w-full'>
                    <div className='flex flex-col items-start justify-between w-[468px] h-[446px]'>
                        <p className='text-[32px] font-semibold text-left text-[#528BFD]'>
                            {translations.skills.headText}
                        </p>
                        <div className='text-[20px] font-normal leading-[25px] text-center text-[#2970FF] border-y border-[#2970FF]'>
                            <p>{translations.skills.bodyText}</p>
                        </div>
                        <Button
                        variant="secondary"
                        size="lg"
                        className='text-white font-extrabold text-xl border border-[#528BFD] rounded-lg'
                        >
                            {translations.skills.contact}
                        </Button>
                    </div>
                    <div className={styles.skillsContainer}>
                        {skills.map((skill, index) => (
                            <Skill key={index} skill={skill.skill} value={skill.value} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}   