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
        <div className="bg-[#020312] flex flex-col items-center p-8 w-full" id="skills">
            <div className="w-full max-w-[1400px]">
                {/* Título */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.2] text-center text-[#528BFD] mb-6">
                    {translations.skills.title}
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    {/* Texto y botón */}
                    <div className="flex flex-col md:items-start justify-between w-full md:w-[468px] gap-6">
                        <p className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-center md:text-left text-[#528BFD]">
                            {translations.skills.headText}
                        </p>

                        <div className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[25px] text-center text-[#2970FF] border-y border-[#2970FF] py-4">
                            <p>{translations.skills.bodyText}</p>
                        </div>

                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full md:w-auto text-white font-extrabold text-lg sm:text-xl border border-[#528BFD] rounded-lg px-6 py-3"
                        >
                            {translations.skills.contact}
                        </Button>
                    </div>

                    {/* Contenedor de habilidades */}
                    <div
                        className={`${styles.skillsContainer} flex items-center`}
                    >
                        {skills.map((skill, index) => (
                            <Skill key={index} skill={skill.skill} value={skill.value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}   