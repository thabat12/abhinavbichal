import NavBar from "./NavBar.js";
import WorkScreen from "./screens/WorkScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

// Find the root element
const root = document.getElementById("root");
console.log(root);
root.className = 'flex flex-col w-screen items-center justify-center relative overflow-x-hidden min-h-screen';

// Fix the particles element as well
const particlesWrapper = document.createElement("div");
particlesWrapper.className = "absolute top-0 left-0 w-screen h-full overflow-hidden";
particlesWrapper.style.zIndex = -1;

const particles = document.createElement("div");
particles.id = "particles-js";
particles.className = "absolute top-0 left-0 w-screen h-[200rem]";
particles.style.zIndex = -1;
particlesWrapper.appendChild(particles);
root.appendChild(particlesWrapper);

function loadParticles() {
    particlesJS.load("particles-js", "data/particles.json", function() {
        console.log("particles-js loaded");
    });
}

window.addEventListener("load", () => {
    loadParticles();
});

// Basic navigation implementation
const homeScreen = HomeScreen();
const workScreen = WorkScreen();
let currentScreen = homeScreen;

// Fix the navigation bar
let config = {
    name: "Abhinav Bichal",
    navigation: [
        {
            name: "Home",
            action: (e) => { 
                console.log("home button is clicked!"); 

                const currentPage = document.getElementById(currentScreen.id);

                if (currentPage.id == "home-screen") {
                    return;
                }

                root.removeChild(currentPage);
                root.appendChild(homeScreen);
                currentScreen = homeScreen;
            }
        },
        {
            name: "Work",
            action: (e) => {
                console.log("work button is clicked!");
                const currentPage = document.getElementById(currentScreen.id);

                if (currentPage.id == "work-screen") {
                    return;
                }

                root.removeChild(currentPage);
                root.appendChild(workScreen);
                currentScreen = workScreen;
            }
        },
        {
            name: "Updates",
            action: (e) => {}
        }
    ]
}

const navBar = NavBar(config);
root.appendChild(navBar);

root.appendChild(currentScreen);