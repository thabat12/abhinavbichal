import ProfileTile from "./components/ProfileTile.js";
import NavBar from "./NavBar.js";
import AboutMe from "./components/AboutMe.js";
import WorkExperience from "./components/WorkExperience.js";
import MoreStuff from "./components/MoreStuff.js";
import BottomBar from "./components/BottomBar.js";

// Find the root element
const root = document.getElementById("root");
console.log(root);
root.className = 'flex flex-col w-screen items-center justify-center relative';

// Fix the particles element as well
const particles = document.createElement("div");
particles.id = "particles-js";
particles.className = "absolute top-0 left-0 w-full h-full";
particles.style.zIndex = -1;
root.appendChild(particles);

// Fix the navigation bar
let config = {
    name: "Abhinav Bichal",
    navigation: [
        {
            name: "Home",
            action: (e) => { console.log("home button is clicked!"); }
        },
        {
            name: "Work",
            action: (e) => {}
        },
        {
            name: "Updates",
            action: (e) => {}
        }
    ]
}

const navBar = NavBar(config);
root.appendChild(navBar);

// Everything else will be a "screen" that is contained within root
const HomeScreen = document.createElement("div");
HomeScreen.id = "home-screen";
HomeScreen.className = "flex flex-col items-center h-screen w-screen md:w-[50rem] py-[10rem] space-y-5";
const profileTile = ProfileTile("Abhinav Bichal", "headshot.JPG", "bio");
HomeScreen.appendChild(profileTile);


const abtMeTxt = `I am a computer science & computational biology student at the University of Texas 
at Austin who aspires to develop technology to address real-world problems. I have had experiences
 working in academic research for bio-informatics & NLP, as well as working at a Fortune 100 company 
 to develop software used by thousands of people. I specialize in software engineering and data 
 science, and am testing the waters with AI/ ML at the moment!`;

const aboutMe = AboutMe(abtMeTxt);

HomeScreen.appendChild(aboutMe);


// sum work experiences would be nice to include
const experiences = [
    {
        title: "NLP Research Assistant @ UT Austin - UT Linguistics Department",
        location: "Austin, TX",
        date: "Jun 2024 - Now",
        description: "Accelerating the progress of medical research by enabling medical literature mining and document classification via Llama 3-8B. Implemented LoRA fine-tuning of models to boost BLEU score by 10%, enabling a desirable ~0.9 ROC score.",
        media: [
            {
                img: "",
                desc: null
            }
        ],
    },
    {
        title: "Founder / Developer @ BitFinance - Educational Fintech App",
        location: "Plano, TX",
        date: "Jun 2024 - Present",
        description: "Developing a personal finance app dedicated to teach fundamental financial concepts in an easy way. Also integrated with Plaid to enable users to track their expenses and income across thousands of institutions. Working on integrating on-device AI features for personalized insights.",
        media: [
            {
                img: "",
                desc: null
            }
        ],
    },
    {
        title: "Software Engineering Intern @ Capital One - IDEAL Data Pipelines Team",
        location: "Austin, TX",
        date: "Jun 2023 - Aug 2023",
        description: "Augmented the IDEAL data pipeline by implementing a microservice to analyze and predict user traffic flow. Optimized SQL queries and handled 100k+ daily transactions on the pipeline. Currently deployed into production and used by the Auto Finance team at Capital One.",
        media: [
            {
                img: "",
                desc: null
            }
        ],
    },
];

const workExperience = WorkExperience(experiences);

HomeScreen.appendChild(workExperience);

// sum more stuff-stuff
const moreStuffData = {
    educationList: [
        {
            degree: "M.S. Computer Science",
            institution: "The University of Texas at Austin",
            dates: "2025-2026"
        },
        {
            degree: "B.S. Computer Science",
            institution: "The University of Texas at Austin",
            dates: "2023-2025"
        },
        {
            degree: "B.S. Computational Biology",
            institution: "The University of Texas at Austin",
            dates: "2021-2025"
        }
    ],
    dailyQuote: {
        quote: "Personality is that which permits a prediction of what a person will do in a given situation",
        author: "Raymond Cattell"
    },
    skillsList: [
        {
            name: "Python",
            level: "Advanced",
            percentage: 90
        },
        {
            name: "AWS",
            level: "Advanced",
            percentage: 75
        },
        {
            name: "TypeScript/ JavaScript",
            level: "Intermediate",
            percentage: 60
        },
        {
            name: "Java",
            level: "Intermediate",
            percentage: 50
        },
        {
            name: "C/C++",
            level: "Intermediate",
            percentage: 50
        },
        {
            name: "Docker",
            level: "Intermediate",
            percentage: 40
        },
        {
            name: "TensorFlow/ PyTorch",
            level: "Beginner",
            percentage: 30
        },
        {
            name: "SQL",
            level: "Beginner",
            percentage: 20
        },
    ]
}

const moreStuff = MoreStuff(moreStuffData);
HomeScreen.appendChild(moreStuff);


const mediaData = [
    {
        svg: "./assets/github-brown.svg",
        action: () => {console.log("github icon clicked on the bottom");}
    },
    {
        svg: "./assets/linkedin-brown.svg",
        action: () => {console.log("linkedin icon clicked on the bottom");}
    },
    {
        svg: "./assets/youtube-brown.svg",
        action: () => {console.log("youtube icon clicked on the bottom");}
    },
    {
        svg: "./assets/twitter-brown.svg",
        action: () => {console.log("twitter icon clicked on the bottom");}
    },
    {
        svg: "./assets/email-brown.svg",
        action: () => {console.log("email icon clicked on the bottom");}
    }
];

const bottomBar = BottomBar(mediaData);

HomeScreen.appendChild(bottomBar);


// window.addEventListener("load", () => {
//     particlesJS.load("particles-js", "data/particles.json", function() {
//         console.log("particles-js loaded");
//     });
// });

root.appendChild(HomeScreen);