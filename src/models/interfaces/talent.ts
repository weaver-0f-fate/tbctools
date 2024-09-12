import { Class, Spec } from "../enums";

export interface Talent {
    title: string;
    ranks: TalentRank[];
    iconUrl: string;
    description: string;
    class: Class,
    spec: Spec
}

export interface TalentRank {
    id: number;
    number: number;
    spellUrl: string;
}