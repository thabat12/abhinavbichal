import ProjectsShowcase from "../components/ProjectsShowcase.js";
import ProjectsShowcaseScrollbar from "../components/ProjectsShowcaseScrollbar.js";

const projectShowcaseData = [
    {
        title: "OrangeAI",
        desc: "Track your calorie intake with just a snap! OrangeAI is my first ever mobile app that uses ConvNets to detect food items.",
        media: {
            src: "",
            links: {
                youtube: "something.com",
                github: null
            },
        },
        skills: "Kotlin, TensorFlow, API, Android Development"
    },
    {
        title: "Project TetraNet",
        desc: "Wildfire detection & mitigation using a weather balloon and AI. Presented work at the ISEF Conference.",
        media: {
            links: [],
            media: []
        },
        skills: "Embedded Systems, TensorFlow, C++, Azure"
    },
    {
        title: "Stock Market Predictions",
        desc: "Can neural networks predict the stock market given 10 years of data? It turns out they kind of can...",
        media: {
            links: [],
            media: []
        },
        skills: "Keras, TensorFlow, Machine Learning, Data Visualization"
    },
    {
        title: "Texas Datathon 2022",
        desc: "Predicting broader market trends with the power of random forest networks! Winner of $2,000.",
        media: {
            links: [],
            media: []
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "AWS-deploy",
        desc: "Making deployments on AWS easier with a simple CLI tool! I use this for all my projects.",
        media: {
            links: [],
            media: []
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "PintOS",
        desc: "My implementation of a simple operating system supporting process scheduling, memory management, and file systems.",
        media: {
            links: [],
            media: []
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "This Website v.1.0",
        desc: "And of course, what you're seeing right now! This is entirely made with raw JS, HTML, and tailwind CSS.",
        media: {
            links: [],
            media: []
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    }
]


export default function WorkScreen() {
    console.log("creating work screen");
    const WorkScreen = document.createElement('div');
    WorkScreen.id = "work-screen";
    WorkScreen.className = `
        flex flex-col w-full h-full grow md:w-[40rem] lg:w-[60rem] pt-[8rem] md:pt-[10rem]
        bg-clip-padding backdrop-filter backgrop-blur-2xl bg-opacity-40
        transition ease-linear gap-4 justify-center items-center pb-10
        `;

    const workGrid = document.createElement("div");
    workGrid.className = `
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2
    `;

    WorkScreen.appendChild(workGrid);

    projectShowcaseData.forEach((projectData) => {
        const projectShowcaseElem = document.createElement("div");
        projectShowcaseElem.className = `
            flex flex-col items-center space-y-5 w-[18rem] rounded-md p-3 bg-[#EDE2D0]
            shadow-sm
        `;
        projectShowcaseElem.innerHTML = `
            <div class="w-[15rem] h-[15rem] bg-gray-400 rounded-md"></div>
            <h2 class="text-lg font-semibold">${projectData.title}</h2>
            <p class="tracking-wide">${projectData.desc}</p>
            <p>Skills: ${projectData.skills}</p>
        `;

        const linkClassName = "w-full text-start hover:text-[#000000] cursor-pointer underline";

        if (projectData.media.links.github) {
            // add github link to a new tab
            const githubLink = document.createElement('a');
            githubLink.href = projectData.media.links.github;
            githubLink.target = "_blank";
            githubLink.innerText = "GitHub";
            githubLink.className = linkClassName;
            projectShowcaseElem.appendChild(githubLink);

        }

        if (projectData.media.links.youtube) {
            // add youtube link to a new tab
            const youtubeLink = document.createElement('a');
            youtubeLink.href = projectData.media.links.youtube;
            youtubeLink.target = "_blank";
            youtubeLink.innerText = "YouTube";
            youtubeLink.className = linkClassName;
            projectShowcaseElem.appendChild(youtubeLink);
        }

        workGrid.appendChild(projectShowcaseElem);
    });


    return WorkScreen;
}