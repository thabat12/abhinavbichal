import ProfileTile from "./components/ProfileTile.js";
import NavBar from "./NavBar.js";


// Find the root element
const root = document.getElementById("root");
console.log(root);
root.className = 'flex flex-col w-screen items-center justify-center relative';

// Fix the particles element as well
const particles = document.createElement("div");
particles.id = "particles-js";
particles.className = "absolute top-0 left-0 w-full h-full";
particles.style.zIndex = -1;
root.appendChild(particles);

// Fix the navigation bar
let config = {
    name: "Abhinav Bichal",
    navigation: [
        {
            name: "Home",
            action: (e) => { console.log("home button is clicked!"); }
        },
        {
            name: "Work",
            action: (e) => {}
        },
        {
            name: "Updates",
            action: (e) => {}
        }
    ]
}

const navBar = NavBar(config);
root.appendChild(navBar);

// Everything else will be a "screen" that is contained within root
const HomeScreen = document.createElement("div");
HomeScreen.id = "home-screen";
HomeScreen.className = "flex flex-col items-center h-screen w-[50rem] py-[10rem]";
const profileTile = ProfileTile("Abhinav Bichal", "headshot.JPG", "bio");
HomeScreen.appendChild(profileTile);


window.addEventListener("load", () => {
    particlesJS.load("particles-js", "data/particles.json", function() {
        console.log("particles-js loaded");
    });
});

root.appendChild(HomeScreen);