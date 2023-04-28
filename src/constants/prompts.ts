import { shuffle } from 'lodash'

export const PROMPTS_LIST = [
  'Someone falls over',
  "Someone's shoe breaks",
  'Dress gets caught in heel',
  'Affrisimo comes on',
  'Rounds needs restarting',
  'Partner missing at the beginning of a round',
  "Someone's hairpiece falls out",
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
  "Judges don't move for a whole round of Latin",
  'Charlotte goes oooh while dancing',
  "Josh doesn't smile",
  'Harry gets out the M&Ms',
  'A couple has a fight',
  'Someone starts drinking before lunch',
  'Someone is still drunk/very hungover/has not gone to bed from the night before',
  'Cha Cha Slide comes on',
  'Biased judging',
  'Team match is dominated by the host uni',
  'Couple goes the wrong way around the floor',
  'Warwick couple makes a final (get in there!!)',
  'A team does coordinated dancing on the sidelines',
  'Gary Foster is present',
  'Two Warwick couples crash',
  'Serena comes straight from a shift/has not slept',
  'Bristol are really loud',
  "Someone's number falls off",
  'Someone gets hit in the head',
  'Warwick team final in Team Match',
  'The Macarena comes on',
  'Lottie forgets the camera',
  'Charlotte gets asked for safety pins',
  'Someone attempts the alternative version of the Macarena',
  'Charlotte/Becca get asked to do hair',
  'Pit stop at Maccies',
  'Maccies is closed :(',
  'Serena and Josh fall asleep at the back of the coach',
  'TEAM PHOTO!!!',
  'Jess is mentioned',
  'Mark is here!',
  'BROWNIES!',
  'Becca complains about Warwick Bear',
  'Cat becomes obsessed with the shark',
  "It's tiring being a president (Josh lies down on the floor)",
  'Becca knocks over her water bottle',
  'Josh says "Everything will be fine!"',
  'Josh says "Lizzzzzz"',
  'Abdullah loses something',
  'Josh sounds fed up',
  'Someone gets first-rounded',
  'Someone gets knocked out too early',
  'B team beats A team',
  'Josh has partner troubles',
  "Someone knocks over Josh's stuff",
  'Josh, Becca, Charlotte and Gemma start crying',
  'Chris is a dad',
  'A beginner goes missing before their round',
  'Someone sits in your seat',
  'Someone is danger dancing',
  'Did you know Becca went to Sheffield?',
  'Someone asks for a timetable',
  'Serena and Abi do the chant',
  'Someone mentions the chocolate huel and vodka incident',
  'Someone oversleeps',
  'Drinking on the coach',
  'Josh looks at work things',
  'Daria forgets she has to dance',
  'Tej sticks his tongue out',
  'Emily falls asleep',
  'Josh has a heart attack',
  'Piotr goes missing',
  'Josh gets asked TC things',
]

export const PROMPTS = (): string[] => shuffle(PROMPTS_LIST).slice(0, 25)
