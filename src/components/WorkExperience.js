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
    {
        title: "",
        location: "Austin, TX",
        date: "Jun 2023 - Aug 2023",
    }
]


export default function WorkExperience(experiences) {
    const allWorkExperiencesElem = document.createElement('div');
    allWorkExperiencesElem.className = "flex flex-col space-y-2 md:w-[40rem]";

    const headerElem = document.createElement('h1');
    headerElem.className = "text-[#68594C] font-bold text-3xl md:text-2xl text-center md:text-left";
    headerElem.innerText = "Work Experience";

    allWorkExperiencesElem.appendChild(headerElem);

    const allWorkExperiencesColListElem = document.createElement('div');
    allWorkExperiencesColListElem.className = "flex flex-col space-y-5";

    experiences.forEach((exp) => {
        console.log(`work experience title ${exp.title} created`);

        const workExpEntryRowElem = document.createElement("div");
        workExpEntryRowElem.className = "flex flex-row relative group w-full space-x-2";

        // create & add the sidebar thing
        const sideBarElem = document.createElement("div");
        sideBarElem.className = "flex flex-col items-center relative w-[4vw]";
        sideBarElem.innerHTML = `
            <div class="bg-[#E6D8BD] h-full w-2 group-hover:w-3 mt-3 transition-all ease-linear"></div>
        `;
        workExpEntryRowElem.appendChild(sideBarElem);
        
        // create & add the actual work experience entry
        const workExperienceElem = document.createElement("div");
        workExperienceElem.className = "work-experience flex flex-col px-2 relative group/experience";

        const titleElem = document.createElement("p");
        titleElem.className = "font-bold text-lg";
        titleElem.innerText = exp.title;
        workExperienceElem.appendChild(titleElem);

        const dateElem = document.createElement("p");
        dateElem.className = "italic";
        dateElem.innerText = exp.date;
        workExperienceElem.appendChild(dateElem);

        const descElem = document.createElement("p");
        descElem.className = "tracking-wide";
        descElem.innerText = exp.description;
        workExperienceElem.appendChild(descElem);

        if (exp.media) {
            // Now work on whatever media is included in this entry
            const mediaContainerElem = document.createElement("div");
            mediaContainerElem.className = "relative transition-all ease-in-out flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row items-center flex mt-4 pb-2";

            const mediaEntryElems = exp.media.map((mediaElem) => {
                const mediaEntryElem = document.createElement("div");
                mediaEntryElem.className = `w-[20rem] h-full bg-${mediaElem.background ? mediaElem.background : "black"} rounded-md relative group/media1`;
                mediaEntryElem.innerHTML = `
                    <img
                        class="w-full h-[15rem] object-${mediaElem.imageFitType ? mediaElem.imageFitType: "contain"} rounded-md"
                        src="${mediaElem.img}"></img>
                    <div class="h-[40%] w-full bg-black bottom-0 absolute rounded-b-md bg-opacity-0 group-hover/media1:bg-opacity-40 transition ease-linear p-3">
                        <p class="text-sm font-semibold group-hover/media1:opacity-100 opacity-0 text-white">${mediaElem.desc} ${mediaElem.url ? "(double-click)" : ""}</p>
                    </div>
                `;

                if (mediaElem.url) {
                    let tapped = false;
                    mediaEntryElem.addEventListener("click", (e) => {
                        if (!tapped) {
                            tapped = true;
                            setTimeout(() => {tapped = false; console.log("tapped timeout ended")}, 300); // Reset tap state after 300ms
                        } else {
                            window.open(mediaElem.url);
                        }
                    });
                }
                return mediaEntryElem;
            });

            mediaEntryElems.forEach(mediaEntryElem => {
                mediaContainerElem.appendChild(mediaEntryElem);
            });

            workExperienceElem.appendChild(mediaContainerElem);
        }

        workExpEntryRowElem.appendChild(workExperienceElem);
        allWorkExperiencesColListElem.appendChild(workExpEntryRowElem);
    });

    allWorkExperiencesElem.appendChild(allWorkExperiencesColListElem);

    return allWorkExperiencesElem;
}