export default function AboutMe(text) {
    const aboutMe = document.createElement('div');
    aboutMe.className = "flex flex-col w-[40rem] space-y-5";
    aboutMe.innerHTML = `
        <h1 class="text-3xl font-bold text-[#291F1D]">About Me</h1>
        <p class="text-[#5C5C5C]">${text}</p>
    `;
    return aboutMe;
}