import ProfileTile from "./components/ProfileTile.js";
import NavBar from "./NavBar.js";
import AboutMe from "./components/AboutMe.js";
import WorkExperience from "./components/WorkExperience.js";

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
HomeScreen.className = "flex flex-col items-center h-screen w-[50rem] py-[10rem] space-y-5";
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
        description: "Accelerating the progress of medical research by enabling literature mining and document classification via Llama 3-8B. Implemented LoRA fine-tuning of models to boost BLEU score by 10%, enabling a desirable ~0.9 ROC score.",
        media: [
            {
                img: "",
                desc: null
            }
        ],
    },
    {
        title: "Software Engineer Intern @ Capital One",
        location: "Plano, TX",
        date: "May 2023 - Aug 2023",
        description: "Developed a Spring Boot microservice to optimize the process of sending out millions of emails to customers, resulting in a 20% reduction in email send time and a cost savings of $100,000 per year. The service is currently used by over 10,000 customers.",
        media: [
            {
                img: "",
                desc: null
            }
        ],
    },
    {
        title: "Undergraduate Research Assistant @ UT Austin - Oden Institute for Computational Engineering and Sciences",
        location: "Austin, TX",
        date: "Aug 2022 - May 2023",
        description: "Researched the effects of COVID-19 on the human brain using fMRI data. Developed a Python package to analyze and visualize large datasets, resulting in a publication in a peer-reviewed journal.",
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


window.addEventListener("load", () => {
    particlesJS.load("particles-js", "data/particles.json", function() {
        console.log("particles-js loaded");
    });
});

root.appendChild(HomeScreen);