import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Cassidy Pignatello | Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A portfolio website for Cassidy Pignatello, a fullstack JavaScript web developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
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
  resume: 'https://drive.google.com/file/d/1ojmyZvvvZ_D8kPA8ap1FEinxBtqCUHCp/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking for a developer you can collaborate with?',
  btn: 'Email Me',
  email: 'cassidy@itscassidy.com',
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
