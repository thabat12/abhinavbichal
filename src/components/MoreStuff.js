function SkillsTile(skillsList) {
    const skillsTileElem = document.createElement('div');
    skillsTileElem.className = "rounded-md outline outline-gray-400 outline-1 p-5 row-span-2";

    const skillsListColElem = document.createElement('div');
    skillsListColElem.className = "flex flex-col justify-start items-start space-y-2";
    skillsListColElem.innerHTML = `
        <h2 class="font-bold text-lg text-[#68594C]">
            Technical Skills
        </h2>
    `;

    skillsList.forEach((skill) => {
        const skillEntryElem = document.createElement('div');
        skillEntryElem.className = "flex flex-col justify-start items-center w-full space-y-1";
        skillEntryElem.innerHTML = `
            <!-- "python" - "advanced" -->
            <div class="w-full">
                <div class="flex flex-col md:flex-row md:justify-between w-full md:items-end">
                    <p class="text-black text-lg font-semibold">
                        ${skill.name}
                    </p>

                    <p class="text-[#68594C]">
                        ${skill.level}
                    </p>
                </div>
            </div>
            <!-- end of "python" - "advanced" -->

            <!-- skill bar -->
            <div class="w-full h-4 bg-[#C2A697] relative">
                <div class="w-[${skill.percentage}%] h-full relative bg-[#876250]"></div>
            </div>
            <!-- end of skill bar -->
        `;
        
        skillsListColElem.appendChild(skillEntryElem);
    });

    skillsTileElem.appendChild(skillsListColElem);
    return skillsTileElem;
}

function DailyQuoteTile(quoteData) {
    const dailyQuoteTileElem = document.createElement('div');
    dailyQuoteTileElem.className = "rounded-md outline outline-gray-400 outline-1 p-5 row-span-1 col-span-1";

    const dailyQuoteColElem = document.createElement('div');
    dailyQuoteColElem.className = "flex flex-col justify-start items-start space-around h-full";
    dailyQuoteColElem.innerHTML = `
        <h2 class="font-bold text-lg text-[#68594C]">
            Daily Quote
        </h2>

        <div class="grow w-full tracking-wide text-center p-3 flex flex-col justify-center items-center text-lg italic">
            <p>
                "${quoteData.quote}"
            </p>
        </div>

        <div class="w-full text-right px-5 italic">
            - ${quoteData.author}
        </div>
    `;

    dailyQuoteTileElem.appendChild(dailyQuoteColElem);

    return dailyQuoteTileElem;
}

function EducationTile(educationList) {
    const educationTileElem = document.createElement('div');
    educationTileElem.className = "rounded-md outline outline-gray-400 outline-1 p-5 row-span-1 col-span-1";

    const educationListColElem = document.createElement('div');
    educationListColElem.className = "flex flex-col justify-start items-start";
    educationListColElem.innerHTML = `
        <h2 class="font-bold text-lg text-[#68594C]">
            Education
        </h2>
    `;

    educationList.forEach((edu) => {
        const eduEntryElem = document.createElement('div');
        eduEntryElem.className = "flex flex-row space-x-2 my-2";
        eduEntryElem.innerHTML = `
            <!-- education icon -->
            <div class="w-9 h-9 rounded-sm mt-1 flex flex-col justify-center items-center">
                <img src="./assets/graduate.svg" alt="education icon">
            </div>

            <!-- education degree -->
            <div class="flex flex-col items-start justify-start leading-tight font-bold">
            <h3>
                ${edu.degree}
            <h3>

            <!-- institution -->
            <p class="text-sm font-normal leading-4">
                ${edu.institution}
            </p>

            <!-- dates -->
            <p class="italic text-sm font-normal leading-4">
                ${edu.dates}
            </p>
        `;

        educationListColElem.appendChild(eduEntryElem);
    });

    educationTileElem.appendChild(educationListColElem);

    return educationTileElem;
}


function MoreStuffGrid(data) {
    const moreStuffGridElement = document.createElement('div');
    moreStuffGridElement.className = "grid grid-cols-2 grid-rows-2 grid-flow-col gap-2";

    // get that education tile
    const educationTileElem = EducationTile(data.educationList);
    moreStuffGridElement.appendChild(educationTileElem);

    // get that daily quote tile
    const dailyQuoteTileElem = DailyQuoteTile(data.dailyQuote);
    moreStuffGridElement.appendChild(dailyQuoteTileElem);

    // get that skills tile
    const skillsTileElem = SkillsTile(data.skillsList);
    moreStuffGridElement.appendChild(skillsTileElem);

    return moreStuffGridElement;
}


export default function MoreStuff(data) {
    const moreStuffElement = document.createElement('div');
    moreStuffElement.className = "flex flex-col md:w-[40rem] mb-5 space-y-2 px-2";

    const headerElem = document.createElement('div');
    headerElem.className = "flex flex-col items-start space-y-1";
    headerElem.innerHTML = `
         <h1 class="text-[#68594C] font-bold text-2xl">
            Some More Stuff
        </h1>

        <h3 class="italic tracking-wide ml-2 text-[#5C5C5C]">
            Background, Experience, and Mindset
        </h3>
    `;

    moreStuffElement.appendChild(headerElem);

    const moreStuffGridElement = MoreStuffGrid(data);
    moreStuffElement.appendChild(moreStuffGridElement);

    return moreStuffElement;
}

`
<div class="flex flex-col items-center justify-center w-screen h-screen">


  <!-- more stuff section -->
  <div class="flex flex-col w-[40rem] mb-5 space-y-2">
    <div class="flex flex-col items-start space-y-1">
        <h1 class="text-[#68594C] font-bold text-2xl">
            Some More Stuff
        </h1>

        <h3 class="italic tracking-wide ml-2 text-[#5C5C5C]">
            Background, Experience, and Mindset
        </h3>
    </div>

    <!-- some more stuff grid layout -->
    <div class="grid grid-cols-2 grid-rows-2 grid-flow-col gap-2">
      
    <!-- education tile -->
    <div class="rounded-md outline outline-gray-400 outline-1 p-5 row-span-1 col-span-1">
        <div class="flex flex-col justify-start items-start">
            <h2 class="font-bold text-lg text-[#68594C]">
            Education
            </h2>

            <div class="flex flex-row space-x-2">
            <!-- education icon -->
            <div class="w-9 h-9 bg-gray-400 rounded-sm mt-1"></div>

            <div class="flex flex-col items-start justify-start leading-tight font-bold">
                <h3>
                M.S. Computer Science
                <h3>

                <p class="text-sm font-normal leading-4">
                The University of Texas at Austin
                </p>

                <p class="italic text-sm font-normal leading-4">
                2025-2026
                </p>
            </div>


            </div>
        </div>
    </div>
    <!-- end of education tile -->

    <!-- daily quote tile -->
    <div class="rounded-md outline outline-gray-400 outline-1 p-5 row-span-1 col-span-1">
        <div class="flex flex-col justify-start items-start h-full">
            <h2 class="font-bold text-lg text-[#68594C]">
                Daily Quote
            </h2>

            <div class="grow w-full tracking-wide text-center p-3 flex flex-col justify-center items-center text-lg italic">
                <p>
                    "Personality is that which permits a prediction of what a person will do in a given situation"
                </p>
            </div>

            <div class="w-full text-right px-5 italic">
                - Raymond Cattell
            </div>
        </div>
    </div>
    <!-- end of daily quote tile -->

    <!-- skills tile -->
    <div class="rounded-md outline outline-gray-400 outline-1 p-5 row-span-2">
        <div class="flex flex-col justify-start items-start">
            <h2 class="font-bold text-lg text-[#68594C]">
                Technical Skills
            </h2>

            <!-- one individual skill -->
            <div class="flex flex-col justify-start items-center w-full space-y-1">

                <!-- "python" - "advanced" -->
                <div class="w-full">
                    <div class="flex flex-row justify-between w-full items-end">
                        <p class="text-black text-lg font-semibold">
                            Python
                        </p>

                        <p class="text-[#68594C]">
                            Advanced
                        </p>
                    </div>
                
                </div>
                <!-- end of "python" - "advanced" -->

                <!-- skill bar -->
                <div class="w-full h-4 bg-[#C2A697] relative">
                    <div class="w-[75%] h-full relative bg-[#876250]"></div>
                </div>
                <!-- end of skill bar -->
            </div>
        </div>
    </div>
    <!-- end of skills tile -->

    </div>
    <!-- end of some more stuff grid layout -->
  </div>
  <!-- end of about me section -->
</div>
`