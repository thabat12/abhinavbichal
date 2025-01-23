export default function AboutMe(text) {
    const aboutMe = document.createElement('div');
    aboutMe.innerHTML = `
        <!-- about me section -->
        <div class="flex flex-col md:px-0 w-full md:w-[40rem] mb-5 space-y-2 group">
            <h1 class="text-[#68594C] font-bold text-2xl text-center md:text-left text-3xl md:text-2xl">
                About Me
            </h1>

            <div class="flex flex-row justify-start items-stretch space-x-3 w-full">
            
                <div class="flex items-center flex-col justify-center items-center w-[5vw]">
                    <div class="w-2 h-full bg-[#E6D8BD] transition-all group-hover:w-3"></div>
                </div>

                <p class="tracking-wider text-lg md:text-base">
                    ${text}
                </p>

            </div>
        </div>
    `;
    return aboutMe;
}