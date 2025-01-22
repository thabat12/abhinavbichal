export default function BottomBar(mediaData) {
    const bottomBar = document.createElement('div');
    bottomBar.className = "flex flex-col w-screen h-[20rem] bg-[#EDE2D0] px-9 py-[3rem] space-y-16";

    const plannedElem = document.createElement('div');
    plannedElem.className = "flex w-full flex-row items-center justify-center";
    plannedElem.innerHTML = `
        <p class="font-bold italic text-[#68594C] w-[25rem] text-center tracking-wider leading-tight text-lg">
            thank you for visiting my website!
        </p>
    `;
    bottomBar.appendChild(plannedElem);

    const linkBarElem = document.createElement('div');
    linkBarElem.className = "flex flex-row w-full items-center";
    linkBarElem.innerHTML = `
        <div class="grow">
            <div class="h-[2px] w-full bg-[#68594C]"></div>
        </div>
    `;

    const socialMediaElems = document.createElement('div');
    socialMediaElems.className = "w-[25rem] flex flex-row items-center justify-center space-x-6";

    mediaData.forEach((media => {
        const iconElem = document.createElement('div');
        iconElem.className = "w-8 h-8 rounded-lg transition ease-linear hover:scale-105";

        iconElem.innerHTML = `
            <img src="${media.svg}" alt="social media icon" class="w-full h-full"></img>
        `;

        // register the click event for each icon
        iconElem.addEventListener('click', () => {
            media.action();
        });

        socialMediaElems.appendChild(iconElem);
    }));

    linkBarElem.appendChild(socialMediaElems);

    let finalGrowElem = document.createElement('div');
    finalGrowElem.className = "grow";
    finalGrowElem.innerHTML = `
        <div class="h-[2px] w-full bg-[#68594C]"></div>
    `;

    linkBarElem.appendChild(finalGrowElem);

    const nameElem = document.createElement('div');
    nameElem.className = "w-full flex flex-row justify-center items-center";
    nameElem.innerHTML = `
        <p class="text-[#68594C]">
            Abhinav Bichal
        </p>
    `;

    bottomBar.appendChild(linkBarElem);
    bottomBar.appendChild(nameElem);

    return bottomBar;
}


`
<!-- bottom bar thing -->
<div class="flex flex-col w-full h-[20rem] bg-[#EDE2D0] px-9 py-[3rem] space-y-16">

    <!-- "planned, desiged, and hand-coded..." -->
    <div class="flex w-full flex-row items-center justify-center">
        <p class="font-bold italic text-[#68594C] w-[25rem] text-center tracking-wider leading-tight text-lg">
            planned, designed, and hand-coded with a passion for computer science and design
        </p>
    </div>

    <!-- link stuff -->
    <div class="flex flex-row w-full items-center">
        <div class="grow">
            <div class="h-[2px] w-full bg-[#68594C]"></div>
        </div>

        <div class="w-[25rem] flex flex-row items-center justify-center space-x-6">
            <div class="w-8 h-8 rounded-lg bg-[#68594C] transition ease-linear hover:scale-105"></div>
            <div class="w-8 h-8 rounded-lg bg-[#68594C] transition ease-linear hover:scale-105"></div>
            <div class="w-8 h-8 rounded-lg bg-[#68594C] transition ease-linear hover:scale-105"></div>
            <div class="w-8 h-8 rounded-lg bg-[#68594C] transition ease-linear hover:scale-105"></div>
            <div class="w-8 h-8 rounded-lg bg-[#68594C] transition ease-linear hover:scale-105"></div>
        </div>


        <div class="grow">
            <div class="h-[2px] w-full bg-[#68594C]"></div>
        </div>
    </div>

    <!-- my name and that's all -->
    <div class="w-full flex flex-row justify-center items-center">
        <p class="text-[#68594C]">
            Abhinav Bichal
        </p>
    </div>


</div>
<!-- end of bottom bar thing -->
`;