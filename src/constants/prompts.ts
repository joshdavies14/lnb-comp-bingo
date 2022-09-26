import { shuffle } from "lodash"

export const PROMPTS_LIST = [
    '',
]

export const PROMPTS = (): string[] => shuffle(PROMPTS_LIST).slice(0, 25);