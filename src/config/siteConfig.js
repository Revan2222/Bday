/**
 * siteConfig.js
 * ============================================
 * EDIT THIS FILE to personalize the whole site.
 * This is the only file you should need to touch
 * to swap in the birthday girl's name, memories,
 * photos, and final message.
 * ============================================
 */

const siteConfig = {
  // The birthday girl's name — used everywhere (mission reveal, stars, cake, etc.)
  name: 'Eruma STN HRT',

  // Background music — drop an mp3 in src/assets/ and update the path.
  // If left empty, the music toggle button will simply do nothing harmful.
  musicSrc: '', // e.g. import musicFile from '../assets/bg-music.mp3' then use musicFile

  // ---- PAGE 1: Mission clues ----
  clues: [
    { id: 1, text: 'Short and always walk like a penguin🐧😂.' },
    { id: 2, text: 'She laughs at silly things even when she doesn\'t want to😂.' },
    { id: 3, text: 'Today is her special day💓.' },
  ],

  // ---- PAGE 2: Memory Street cards ----
  // type controls the animation style: 'slide' | 'bounce' | 'rotate' | 'pop'
  memories: [
    {
      id: 1,
      type: 'slide',
      title: 'Epadithanoo Moment',
      text: 'I thought u were really nice but ne sariyana stn🤨🪨 and elaru gift ready pannatha struggle panuvaga...na matum atha unta kuduka struggle panna paru antha shinchan um,,,water bottle um apa maraka mudiyathu🤣🤣.',
      
    },
    {
      id: 2,
      type: 'bounce',
      title: 'Funniest Moment',
      text: 'I still laugh when I think about it - ethuku sirikanae theriyathu... munja pathalae nne patu sirika start panniduva ...really missing that🙂‍↕️.'
    },
    {
      id: 3,
      type: 'rotate',
      title: 'Favorite Memory',
      text: 'antha kachoriyo etho vagi kuduthiyaee....vagi renduthayum neyae saptuta😂🥲'
    },
    {
      id: 4,
      type: 'pop',
      title: 'A Little irritating Moment',
      text: 'call la irukura apo pesama ne patuku vessel washing panna start paniduva and Home inu kamikavae illa.🤣🤣'
    },
  ],

  // ---- PAGE 4: Party guests entering ----
  guests: [
    'The Best Friend joined the party...',
    'A Surprise Guest arrived...',
    'The Family Squad showed up...',
    'Even the neighbor\'s dog came...',
  ],

  // ---- PAGE 4: Final heartfelt message ----
  birthdayMessage:
    'Enna tha namma munna mari pesuratho sirikiratho illanalum...still i care for u and praying for ur success😁 , and epothum sirichitae irukanum 😁.....Enatha inu sanda potalum still i cant burn the place that once felt like home right ?🏃🏻‍♂️💨 ' ,
  finalFunnyLine: 'Okay bye... now give me some cake! 🎂',
};

export default siteConfig;
