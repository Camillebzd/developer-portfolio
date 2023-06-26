import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Camille Bouzerand',
  title: "Hi all, I'm Camille",
  description:
    "I'm a passionate Full Stack Developer with experience in web application development with React.js, Next.js, Vue.js and Blockchain development on Ethereum, Solidity, Web3.js, Ethers.js, and Hardhat Framework.",
  resumeLink:
    'https://drive.google.com/file/d/1Vv9OQsE-HHu3GsxpBAlUtdU_MLz7_nA1/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'Camillebzd',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://Camillebzd.github.io/',
  linkedin: 'https://www.linkedin.com/in/camille-bouzerand/',
  github: 'https://github.com/Camillebzd',
  instagram: 'https://www.instagram.com/camille.bouzerand',
  facebook: 'https://www.facebook.com/camille.bouzerand',
  twitter: 'https://twitter.com/CamilleBzd',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive Single-Page-Apps (SPA) in React.js and Vue.js'),
        emoji('⚡ Building responsive static websites using Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Vuejs',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassName: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       fontAwesomeClassName: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       fontAwesomeClassName: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       fontAwesomeClassName: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       fontAwesomeClassName: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       fontAwesomeClassName: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       fontAwesomeClassName: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       fontAwesomeClassName: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       fontAwesomeClassName: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       fontAwesomeClassName: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 and ERC-1155 Token Standards'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Ethers.js & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Hardhat',
          fontAwesomeClassName: 'logos:hardhat-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '60',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Epitech Paris',
    subHeader: 'Title of Expert in Information Technology',
    duration: 'September 2017 - August 2022',
    desc: 'Project-based pedagogy including C, C++, Python, Haskell, Javascript and technologies such as Git, Docker and Kubernetes.',
    // grade: 'Grade A',
    descBullets: [
      'Small group project to learn programming concept.',
      "End of studies' project: mobile application to help people with diabetes manage their disease.",
    ],
  },
  {
    schoolName: 'Alchemy University',
    subHeader: 'Certificate Ethereum Developer',
    duration: 'March 2023 - Mai 2023',
    desc: 'Training to become a full-stack ethereum developer.',
    // grade: 'Grade A',
    descBullets: [
      'Small projects to learn blockchain and web3 concept, oriented on EVM.',
      "Personnal project: web game using on-chain metadata NFTs evolving while you use them.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'Forvia / Faurecia',
    companyLogo: '/img/icons/common/forvia.jpg',
    date: 'Oct 2022 – Jun 2023',
    desc: 'I worked as software developer on a SOA framework in C++ in the Europe Innovation team.',
    descBullets: [
    	"Development of a SOA framework.",
    	"Implementation of PKI with OpenSSL in order to protect network exchanges of services.",
    ],    
  },
  {
    role: 'Full Stack Developer',
    company: 'Levana',
    companyLogo: '/img/icons/common/levana.jpg',
    date: 'Mar 2022 – Aug 2022',
    desc: 'I worked as Full Stack developer on multiple subjects from Salesforce CRM env to a React Native mobile application.',
    descBullets: [
    	"Development and implementation of Interaction Studio for Ba&sh.",
    	"Development of a mobile application for monitoring sports activity connected to Salesforce.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Gearfight',
    desc: 'Website in VueJS that allows the user to connect his MetaMask account and see his NFTs. If the NFTs are compatible with the site (valid metadata) he can use them to play with in simple games and make them evolve.',
    github: 'https://github.com/Camillebzd/GearFight',
    link: 'https://gearfighttest.netlify.app',
  },
];

export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

export const emailShow = "bcamille99@gmail.com"

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Camille Bouzerand',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Camille Bouzerand',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-Camillebzd.vercel.app',
  keywords: [
    'Camille',
    'Camille Bouzerand',
    '@Camillebzd',
    'Camillebzd',
    'Portfolio',
    'Camille Portfolio ',
    'Camille Bouzerand Portfolio',
  ],
};
