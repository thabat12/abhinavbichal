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
]


export default function WorkExperience(experiences) {

    const allWorkExperiencesElem = document.createElement('div');
    allWorkExperiencesElem.className = "flex flex-col space-y-2";

    const headerElem = document.createElement('h1');
    headerElem.className = "text-[#68594C] font-bold text-2xl";
    headerElem.innerText = "Work Experience";

    allWorkExperiencesElem.appendChild(headerElem);

    const allWorkExperiencesColListElem = document.createElement('div');
    allWorkExperiencesColListElem.className = "flex flex-col";

    const workExperiencesList = experiences.map((exp) => {
        console.log(`work experience title ${exp.title} created`);

        const workExpEntryRowElem = document.createElement("div");
        workExpEntryRowElem.className = "flex flex-row relative group w-[40rem] space-x-2";

        // create & add the sidebar thing
        const sideBarElem = document.createElement("div");
        sideBarElem.className = "flex flex-col items-center relative w-14";
        sideBarElem.innerHTML = `
            <div class="bg-[#E6D8BD] h-full w-2 group-hover:w-3 mt-3 transition-all ease-linear"></div>
        `;

        workExpEntryRowElem.appendChild(sideBarElem);
        
        // create & add the actual work experience entry
        const workExperienceElem = document.createElement("div");
        workExperienceElem.className = "work-experience flex flex-col px-2";

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


        // Now work on whatever media is included in this entry
        const mediaContainerElem = document.createElement("div");
        mediaContainerElem.className = "flex flex-row items-center py-5 space-x-4";

        const mediaEntryElems = exp.media.map((mediaElem) => {
            const mediaEntryElem = document.createElement("div");
            mediaEntryElem.innerHTML = `
                <div class="w-[15rem] h-[10rem] bg-gray-300 rounded-md relative group/media1">
                    <div class="h-[40%] w-full bg-black bottom-0 absolute rounded-b-md 
                        bg-opacity-0 group-hover/media1:bg-opacity-30 transition ease-linear p-3">

                        <p class="text-sm group-hover/media1:opacity-100 opacity-0 text-white">
                            ${mediaElem.desc}
                        </p>
                    </div>
                </div>
            `;
            
            return mediaEntryElem;
        });

        console.log(mediaEntryElems);

        // append all media entries to the media container element
        for (let i = 0; i < mediaEntryElems.length; i++) {
            console.log(`media entry ${i} created`);
            mediaContainerElem.appendChild(mediaEntryElems[i]);
        }

        // Append the media container to the work experience element
        workExperienceElem.appendChild(mediaContainerElem);
        // Append the work experience element to the container
        workExpEntryRowElem.appendChild(workExperienceElem);

        allWorkExperiencesColListElem.appendChild(workExpEntryRowElem);
    });

    allWorkExperiencesElem.appendChild(allWorkExperiencesColListElem);

    return allWorkExperiencesElem;
}


`
<!-- work experience entry -->
  <div class="flex flex-col space-y-2">
    <h1 class="text-[#68594C] font-bold text-2xl">
      Work Experience
    </h1>

    <div class="flex flex-row relative group w-[40rem] space-x-2">
      <!-- sidebar thing -->
      <div class="flex flex-col items-center relative w-14">
        <div class="rounded-full w-9 h-9 bg-[#E6D8BD] fixed"></div>
        <div class="bg-[#E6D8BD] h-full w-2 group-hover:w-3 mt-3 transition-all ease-linear"></div>
      </div>

      <!-- Actual work experience entry -->
      <div class="work-experience flex flex-col px-2">
        <p class="font-bold text-lg">
          NLP Research Assistant @ UT Austin - UT Linguistics Department
        </p>

        <p class="italic">
          Jun 2024 - Now
        </p>

        <p class="tracking-wide">
            Accelerating the progress of medical research by enabling literature mining and document classification via Llama 3-8B. Implemented LoRA fine-tuning of models to boost BLEU score by 10%, enabling a desirable ~0.9 ROC score.
        </p>

        <div class="flex flex-row items-center h-52 space-x-4">
          <div class="w-[15rem] h-[10rem] bg-gray-300 rounded-md relative group/media1">
            <div class="h-[40%] w-full bg-black bottom-0 absolute rounded-b-md bg-opacity-0 group-hover/media1:bg-opacity-30 transition ease-linear p-3">

              <p class="text-sm group-hover/media1:opacity-100 opacity-0 text-white">The LoRA Pipeline</p>
              
            </div>
          </div>

          <div class="w-[15rem] h-[10rem] bg-gray-300 rounded-md relative group/media1">
            <div class="h-[40%] w-full bg-black bottom-0 absolute rounded-b-md bg-opacity-0 group-hover/media1:bg-opacity-30 transition ease-linear p-3">

              <p class="text-sm group-hover/media1:opacity-100 opacity-0 text-white">GitHub</p>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

`