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
  // 'Charlotte goes oooh while dancing',
  "Josh doesn't smile",
  // 'Harry gets out the M&Ms',
  'A couple has a fight',
  'Someone starts drinking before lunch',
  'Someone is still drunk/very hungover/has not gone to bed from the night before',
  'Cha Cha Slide comes on',
  'Biased judging',
  //  'Team match is dominated by the host uni',
  'Couple goes the wrong way around the floor',
  'Warwick couple makes a final (get in there!!)',
  'A team does coordinated dancing on the sidelines',
  'Gary Foster is present',
  'Two Warwick couples crash',
  // 'Bristol are really loud',
  "Someone's number falls off",
  'Someone gets hit in the head',
  'Warwick team final in Team Match',
  'The Macarena comes on',
  'Someone forgets the camera and no photos are taken',
  'Josh get asked for safety pins',
  'Someone attempts the alternative version of the Macarena',
  'Pit stop at Maccies',
  'Maccies is closed :(',
  // 'Serena or Josh fall asleep at the back of the coach',
  'TEAM PHOTO!!!',
  // 'Mark is here!',
  // 'Jayne is here!',
  'BROWNIES!',
  // 'Fran and Alice become obsessed with the sharks',
  "It's tiring being a human (Josh lies down on the floor)",
  'Josh says "Everything will be fine!"',
  // 'Josh says "Lizzzzzz"',
  'Josh sounds fed up',
  'Someone gets first-rounded',
  'Someone gets knocked out too early',
  'B team beats A team',
  "Someone knocks over Josh's stuff",
  'Josh, Charlotte or Gemma start crying',
  // 'Chris is a dad',
  'A beginner goes missing before their round',
  'Someone sits in your seat',
  'Someone is danger dancing',
  // 'Did you know Becca went to Sheffield?',
  'Someone asks for a timetable',
  // 'Serena and Abi do the chant',
  'Someone mentions the chocolate huel and vodka incident',
  'Someone oversleeps',
  // 'Drinking on the coach',
  'Josh looks at work things',
  // 'Daria forgets she has to dance',
  'Emily or Josh fall asleep',
  'Josh has a heart attack',
  'Josh gets asked TC things',
  'Emily wanders off',
  'Technical difficulties',
  // "Daria pulls Josh's arm",
  'Josh gets scared',
  'Beni puts his eye mask on',
  // 'Daria says "excuse youuuuuuuu"',
  // 'Claire complains about engineering',
  // 'Josh says "Damn it" to one or all of Daria, Claire, Emily and Alys',
  'Josh gets asked about bingo',
  '17 simultaneous be-reals',
  'Emily loses her phone',
  // 'Josh gets concerned at something Mark says',
  'Josh is sleep deprived',
  'Alice runs',
  'Josh gets scared about first aid',
  'Shark goes missing',
  // 'Ivanna or Daria scream',
  'Tunnel of finalists comes out',
  'Warwick/Birmingham/Leicester dominate a final',
  'Row of people doing uni work',
  'Not enough chairs',
  // 'Mark is a proud dad',
  // 'Tamyla dances with a new partner',
  'Josh loses something',
  'Someone gets lost',
  // 'Fran gets excited about trams',
  // 'Tom looks like he really wants to be here',
  // "All the Alice's/Alys' respond to their name",
  // 'Fran has energy no one else has',
  'Emily and Josh start attacking each other',
  'Why do we have sharks?',
  // 'Fran tells us a story',
  // 'Josh and Tom are grandpas',
  'Camera gets lost',
  'Tom/Josh get excited over which service station we stop at',
  // 'Daria, Josh, Claire, Alys and Em cause utter chaos that makes no sense',
  // 'Fran starts eating her dinner super early',
  'Everyone starts crying before midday',
  // 'Nelson Gingerpears rocks up'
]

export const PROMPTS = (): string[] => shuffle(PROMPTS_LIST).slice(0, 25)
