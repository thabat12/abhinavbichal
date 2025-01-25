const options = [
    "OrangeAI",
    "Project TetraNet",
    "Stock Market Predictions",
    "BitFinance"
];


export default function ProjectsShowcaseScrollbar() {
    let currentIndex = 0;

    const projectsShowcaseBarElem = document.createElement("div");
    projectsShowcaseBarElem.className = "flex flex-row items-center justify-between w-full md:w-[40rem] min-h-9 cursor-pointer";

    const backButton = document.createElement("div");
    backButton.className = "w-9 h-9 bg-gray-900 rounded-full transition ease-linear hover:scale-105";

    const nextButton = document.createElement("div");
    nextButton.className = "flex flex-row items-center space-x-3 transition ease-linear hover:scale-105";
    nextButton.id = "showcase-next-button";

    nextButton.innerHTML = `
        <p class="tracking-wide text-2xl">Next: ${options[0]}</p>
        <div class="w-9 h-9 rounded-full">
            <img src="../assets/right-arrow.png" class="w-full h-full"></img>
        </div>
    `;

    projectsShowcaseBarElem.appendChild(backButton);
    projectsShowcaseBarElem.appendChild(nextButton);

    nextButton.addEventListener("click", ()=> {
        if (currentIndex == options.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        nextButton.innerHTML = `
            <p class="tracking-wide text-2xl">Next: ${options[currentIndex]}</p>
            <div class="w-9 h-9 bg-gray-900 rounded-full"></div>
        `;
    });


    return projectsShowcaseBarElem;
}