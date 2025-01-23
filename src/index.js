import ProfileTile from "./components/ProfileTile.js";
import NavBar from "./NavBar.js";
import AboutMe from "./components/AboutMe.js";
import WorkExperience from "./components/WorkExperience.js";
import MoreStuff from "./components/MoreStuff.js";
import BottomBar from "./components/BottomBar.js";

// Find the root element
const root = document.getElementById("root");
console.log(root);
root.className = 'flex flex-col w-full items-center justify-center relative overflow-x-hidden';

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
HomeScreen.className = "flex flex-col items-center w-full md:w-[40rem] lg:w-[60rem] pt-[10rem] space-y-5 lg:space-y-16 bg-clip-padding backdrop-filter backgrop-blur-2xl bg-opacity-40 bg-white";
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
        description: "Accelerating the progress of medical research by enabling medical literature mining and document classification via Llama 3-8B. Implemented LoRA fine-tuning of models to boost BLEU score by 10%, enabling a desirable ~0.9 ROC score. (Pictures to come soon!)",
        media: null
    },
    {
        title: "Founder / Developer @ BitFinance - Educational Fintech App",
        location: "Plano, TX",
        date: "Jun 2024 - Present",
        description: "Developing a personal finance app dedicated to teach fundamental financial concepts in an easy way. Also integrated with Plaid to enable users to track their expenses and income across thousands of institutions. Working on integrating on-device AI features for personalized insights. 8k+ lines of code, 6+ months of planning and research, and my biggest project yet.",
        media: [
            {
                img: "./assets/bitfinance.png",
                url: "https://github.com/thabat12/financetracker",
                desc: "Github Link"
            }
        ],
    },
    {
        title: "Software Engineering Intern @ Capital One - IDEAL Data Pipelines Team",
        location: "Austin, TX",
        date: "Jun 2023 - Aug 2023",
        description: "Augmented the IDEAL data pipeline by implementing a microservice to analyze and predict user traffic flow. Optimized SQL queries and handled 100k+ daily transactions on the pipeline. Currently deployed into production and used by the Auto Finance team at Capital One.",
        media: null
    },
    {
        title: "App Developer @ Austin Meals on Wheels - React Native & Oracle SQL",
        location: "Austin, TX",
        date: "Jun 2023 - Aug 2023",
        description: "Connected a community of 5,000+ senior Austin residents to volunteer food delivery drivers via the MOW app. Enabled MOW to transition from paper-based system logging to an entirely ditial system, increasing MOW operations to serve thousands of residents in the ATX area.",
        media: [
            {
                img: "./assets/mow-app-pages.png",
                desc: "MOW App Pages",
                imageFitType: "cover"
            },
            // {
            //     img: "./assets/mowlogo.png",
            //     desc: "MOW Website Link",
            //     background: "gray-300",
            //     desc: "MOW Austin Website Link",
            //     url: "https://www.mealsonwheelscentraltexas.org/"
            // }
        ],
    },
    {
        title: "Co-Founder @ Scholastician - React & Firebase",
        location: "DFW Area",
        date: "Jun 2021 - Aug 2022",
        description: "Fostered a student-volunteer tutoring program connecting 500+ students in the DFW metroplex area to free-of-cost tutoring services. Developed the entire frontend to facilitate tutor-student matching.",
        media: [
            // {
            //     img: "./assets/scholasticianexample.png",
            //     desc: "Scholastician.org Website UI"
            // },
            {
                img: "./assets/theseStudents.png",
                url: "https://starlocalmedia.com/friscoenterprise/these-frisco-isd-students-want-to-level-the-sat-playing-field/article_580e5700-ec73-11ea-8611-6f6dc9357cc4.html",
                desc: "Dallas Voyage Featured",
                background: "gray-300"
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
        action: () => {console.log("github icon clicked on the bottom"); }
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


window.addEventListener("load", () => {
    particlesJS.load("particles-js", "data/particles.json", function() {
        console.log("particles-js loaded");
    });
});

root.appendChild(HomeScreen);