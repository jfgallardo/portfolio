import { StaticImageData } from "next/image";

export type MenuItem = {
  name: string;
  value: string;
}

export type langParam = 'en-US' | 'es-ES' | 'pt-BR'

export type Dictionary = {
  [key: string]: {
    [subKey: string]: string;
  };
};

export type SkillType = {
  skill: string;
  value: string;
}

export type CardItem = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
}

export type Testimonial = {
  name: string;
  subtitle: string;
  image: StaticImageData;
}