export default function AboutMe(text) {
    const aboutMe = document.createElement('div');
    aboutMe.innerHTML = `
        <!-- about me section -->
        <div class="flex flex-col w-[40rem] mb-5 space-y-2 group">
            <h1 class="text-[#68594C] font-bold text-2xl">
            About Me
            </h1>

            <div class="flex flex-row justify-start items-stretch space-x-3">
            
            <div class="w-28 flex items-center flex-col justify-center">
                <div class="w-2 grow bg-[#E6D8BD] transition-all group-hover:w-3"></div>
            </div>

            <p class="tracking-wide">
                ${text}
            </p>

            </div>
        </div>
    `;
    return aboutMe;
}