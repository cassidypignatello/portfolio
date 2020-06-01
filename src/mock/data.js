import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Cassidy Pignatello | Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A portfolio website for Cassidy Pignatello, a fullstack JavaScript web developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Cassidy Pignatello',
  subtitle: 'I\'m a Fullstack Developer',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'cassidy.jpg',
  paragraphOne: 'I\'m a web developer originally from New York, now based in Jakarta, Indonesia. Before becoming a developer, I worked in digital advertising operations and hold a Bachelor of Arts in Audio/Radio Production from Hofstra University. I\'ve worked at companies such as Yahoo, LinkedIn, and The Wall Street Journal.',
  paragraphTwo: 'Other than learning about new technology, some of my interests include traveling, DJing, playing bass, and practicing Muay Thai.',
  paragraphThree: 'Whether your next project is an e-commerce store, website for your business, or a web application, let\'s talk and see how I can help!',
  resume: 'https://drive.google.com/file/d/1NqqKcvLDBOLdXjqykj8NbFxp3m6Sh90i/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bitshares.png',
    title: 'BitShares',
    info: 'BitShares is an industrial grade crypto-equity, peer to peer distributed ledger, and network based on a Delegated Proof of Stake (DPoS) algorithm.',
    info2: 'I work primarily on bitshares.org, as well as their wallet UI, forums, and news site.',
    url: 'https://www.bitshares.org',
    repo: 'https://github.com/bitshares/bitshares-ui', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'xcoynz.png',
    title: 'XCOYNZ',
    info: 'A cryptocurrency exchange that enables users to set their own fee when making a transaction, as well as integrate all of their crypto asset addresses into a single XCOYNZ address.',
    info2: 'I worked on a complete rebuild of their website as a React app and integrated their mailing list.',
    url: 'https://xcoynz.now.sh/',
    repo: 'https://github.com/cassidypignatello/xcoynz', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'github-battle.png',
    title: 'Github Battle',
    info: 'A React app that communicates with the Github API to battle other Github users and see the most popular repos for various languages.',
    info2: '',
    url: 'https://github-battle-ad866.firebaseapp.com/',
    repo: 'https://github.com/cassidypignatello/github-battle/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking for a developer you can collaborate with?',
  btn: 'Email Me',
  email: 'cassidy.pignatello@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://www.twitter.com/itscassidy',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cassidypignatello',
    },
    {
      id: uuidv1(),
      name: 'whatsapp',
      url: 'https://wa.me/6285942922677?text=Hi%20Cassidy%2C%20I%20found%20you%20on%20itscassidy.com%20and%20I%27d%20like%20to%20connect!',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/cassidypignatello',
    },
    {
      id: uuidv1(),
      name: 'gitlab',
      url: 'https://gitlab.com/cassidypignatello',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
