// ProfileTile.js
export default function ProfileTile(name, imageUrl) {
    // Create the profile tile container
    const profileTileHTML = `
        <!-- Profile Tile -->
        <div class="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
            <div id="profilepic" class="h-[15rem] w-[15rem] bg-[#876250]">
                <img src="${imageUrl}" alt="profile picture" class="h-full w-full object-cover">
            </div>

            <div class="flex flex-col h-full space-y-2 py-5 px-0 items-center md:items-start">

                <!-- Text Right Portion -->
                <div class="text-center md:text-left">
                    <h1 class="text-4xl font-bold text-[#291F1D]">${name}</h1>
                    <h3 class="text-[#5C5C5C]">Software Developer | Full-Stack | ML/ AI</h3>
                    <h3 class="text-[#5C5C5C]">B.S. Computer Science & Comp Bio</h3>
                    <h3 class="text-[#5C5C5C]">UT Austin '25</h3>
                </div>

                <!-- Social Media Icons -->
                <div class="flex flex-row items-center space-x-3 justify-center md:justify-start">
                    <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105 flex items-center justify-center">
                        <img src="./assets/linkedin.svg" alt="linkedin logo" class="w-5 h-5">
                    </div>

                    <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105 flex items-center justify-center">
                        <img src="./assets/github.svg" alt="github logo" class="w-6 h-6">
                    </div>

                    <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105 flex items-center justify-center">
                        <img src="./assets/email.svg" alt="email logo" class="w-6 h-6">
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Profile Tile -->    
    `;

    const profileTile = document.createElement('div');
    profileTile.innerHTML = profileTileHTML;

    return profileTile;
}
