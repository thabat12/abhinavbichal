import ProjectsShowcase from "../components/ProjectsShowcase.js";
import ProjectsShowcaseScrollbar from "../components/ProjectsShowcaseScrollbar.js";

const projectShowcaseData = [
    {
        title: "OrangeAI",
        desc: "Track your calorie intake with just a snap! OrangeAI is my first ever mobile app that uses ConvNets to detect food items.",
        media: {
            src: "./assets/orangeaipic.png",
            links: [
                {
                    linkName: "YouTube",
                    url: "https://www.youtube.com/watch?v=pfz5gKCE9XU"
                },
                {
                    linkName: "GitHub",
                    url: "https://github.com/thabat12/OrangeAI"
                }
            ],
        },
        skills: "Kotlin, TensorFlow, API, Android Development"
    },
    {
        title: "Project TetraNet",
        desc: "Wildfire detection & mitigation using a weather balloon and AI. Presented work at the ISEF Conference. (That's our device at the edge of space!)",
        media: {
            src: "./assets/tetranetpic.png",
            links: [
                {
                    linkName: "GitHub",
                    url: "https://github.com/thabat12/TetraNet"
                }
            ]
        },
        skills: "Embedded Systems, TensorFlow, C++, Azure"
    },
    {
        title: "Stock Market Predictions",
        desc: "Can neural networks predict the stock market given 10 years of data? It turns out they kind of can...",
        media: {
            src: "./assets/stockmarket.png",
            links: [
                {
                    linkName: "Notebook",
                    url: "./stockmarketpredictions.html"
                },
                {
                    linkName: "GitHub",
                    url: "https://github.com/thabat12/Stock-Predictions"
                }
            ]
        },
        skills: "Keras, TensorFlow, Machine Learning, Data Visualization"
    },
    {
        title: "Texas Datathon 2022",
        desc: "Predicting broader market trends with the power of random forest networks! Winner of $2,000.",
        media: {
            src: "./assets/datathonimage.jpg",
            links: [
                {
                    linkName: "My Friend's Post",
                    url: "https://www.linkedin.com/posts/sahaschinni_machinelearning-datascience-ai-activity-7048501533423898624-er7E/"
                }
            ],
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "AWS-deploy",
        desc: "Making deployments on AWS easier with a simple CLI tool! I use this for all my projects.",
        media: {
            src: "./assets/awsdeploy.png",
            links: [
                {
                    linkName: "GitHub",
                    url: "https://github.com/thabat12/aws-deploy"
                }
            ],
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "PintOS",
        desc: "My implementation of a simple operating system supporting process scheduling, memory management, and file systems.",
        media: {
            src: "./assets/pintos.png",
            links: [],
            media: []
        },
        skills: "SciKit-Learn, Pandas, Data Analysis, Machine Learning"
    },
    {
        title: "This Website v.1.0",
        desc: "And of course, what you're seeing right now! This is entirely made with raw JS, HTML, and tailwind CSS.",
        media: {
            src: "./assets/personalwebsite.png",
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
            <div class="w-[15rem] h-[15rem] bg-gray-400 rounded-md">
                <img src="${projectData.media.src}" class="w-full h-full object-cover rounded-md" />
            </div>
            <h2 class="text-lg font-semibold text-[#291F1D]">${projectData.title}</h2>
            <p class="tracking-wide">${projectData.desc}</p>
            <p>Skills: ${projectData.skills}</p>
        `;

        const linkClassName = "w-full text-start hover:text-[#000000] cursor-pointer underline";

        projectData.media.links.forEach((link) => {
            const linkElem = document.createElement('a');
            linkElem.href = link.url;
            linkElem.target = "_blank";
            linkElem.innerText = link.linkName;
            linkElem.className = linkClassName;
            projectShowcaseElem.appendChild(linkElem);
        });

        workGrid.appendChild(projectShowcaseElem);
    });


    return WorkScreen;
}