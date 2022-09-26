import { shuffle } from "lodash"

export const PROMPTS_LIST = [
    'Someone falls over',
    'Someone\'s shoe breaks',
    'Dress gets caught in heel',
    'Affrisimo comes on',
    'Rounds needs restarting',
    'Partner missing',
    'Someone\'s hairpiece falls out',
    'Too many couples on the floor',
    'Not enough couples on the floor',
    'Someone is wearing trainers',
    'Illegal beginner outfit',
    'Someone is dancing way below their category',
    'Oxford/Durham/Cambridge in the final',
    'Durham formation team in the final',
    'A team gets their pom poms out',
    'C or below team makes team match final',
    'Quickstep crash',
    'Paso leap alert',
    'Couple out of time in cha',
    'Judges don\'t move for a whole round of Latin',
    'Dan pulls a tango face',
    'Charlotte goes oooh',
    'Josh doesn\'t smile',
    'Harry gets out the M&Ms',
    'A couple has a fight',
    'Someone starts drinking before lunch',
    'Someone is still drunk/very hungover/has not gone to bed from the night before',
]

export const PROMPTS = (): string[] => shuffle(PROMPTS_LIST).slice(0, 25);