
/*



*/
export default function NavBar(config) {

    const navBarElem = document.createElement("div");
    navBarElem.className = "flex flex-row bg-[#EDE2D0] w-[90%] md:w-[45rem] lg:w-[60rem] h-[4rem] rounded-md items-center justify-between p-5 fixed top-5 z-50 transition ease-linear shadow-sm";

    // Create the name element
    const nameElem = document.createElement("p");
    nameElem.className = "font-bold text-lg text-[#291F1D]";
    nameElem.innerText = config.name;

    // The actual navigation links
    const navigationElem = document.createElement("div");
    navigationElem.className = "flex flex-row space-x-3 cursor-default";
    config.navigation.map((item) => {
        const itemElem = document.createElement("p");
        itemElem.className = "transition ease-linear text-[#5F5350] hover:text-[#000000] font-medium cursor-pointer";
        itemElem.innerText = item.name;
        itemElem.addEventListener("click", item.action);
        navigationElem.appendChild(itemElem);
    });

    navBarElem.appendChild(nameElem);
    navBarElem.appendChild(navigationElem);

    let lastScrollPos = 0;
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        lastScrollPos = window.scrollY;;    });

    return navBarElem;
}