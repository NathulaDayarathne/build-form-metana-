import {atom} from 'jotai'
import {ComponentsType, WelcomeScreenPropertyTypes,EmailScreenPropertyTypes, SectionScreenPropertyTypes} from "./types";
import {SectionScreenPlaceholderData, welcomeScreenPlaceholderData} from "./dynamicComponentPlaceholderData";
import {EmailScreenPlaceholderData} from "./dynamicComponentPlaceholderData";


export const componentsStore = atom<ComponentsType[]>([]);
export const selectedComponentAtom = atom<ComponentsType | null>(null);


// Screen atoms
export const welcomeScreenAtom = atom<WelcomeScreenPropertyTypes>(welcomeScreenPlaceholderData);
export const EmailScreenAtom = atom<EmailScreenPropertyTypes>(EmailScreenPlaceholderData);
export const SectionScreenAtom = atom<SectionScreenPropertyTypes>(SectionScreenPlaceholderData);