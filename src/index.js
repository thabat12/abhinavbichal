import ProfileTile from "./components/ProfileTile.js";

// Create a div element
const div = document.createElement('div');

// Add TailwindCSS classes to the div
div.className = 'w-screen h-screen bg-gray-900';
div.innerHTML = "hello there";

// Append the div to the root element
document.getElementById('root').appendChild(div);

console.log("hello from index.js");

try {
    console.log("step 1");
    const profileTile = ProfileTile("Abhinav Bichal", "headshot.JPG", "bio");
    document.getElementById('root').appendChild(profileTile);
    console.log(profileTile);

} catch (err) {
    console.error(err);
}

console.log("profile tile appended");