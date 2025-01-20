// ProfileTile.js
export default function ProfileTile(name, imageUrl, bio) {
    // Create the profile tile container
    const profileTileHTML = `
        <!-- Profile Tile -->
        <div class="flex h-[15rem] w-[40rem] flex-row items-center space-x-10 bg-blue-400">
            <div id="profilepic" class="h-[15rem] w-[15rem] bg-[#876250]">

            </div>

            <div class="flex flex-col h-full space-y-2 grow py-5">

            <!-- Text Right Portion -->
            <div>
                <h1 class="text-4xl font-bold text-[#291F1D]">Abhinav Bichal</h1>
                <h3 class="text-[#5C5C5C]">Software Developer | Full-Stack | ML/ AI</h3>
                <h3 class="text-[#5C5C5C]">B.S. Computer Science & Comp Bio</h3>
                <h3 class="text-[#5C5C5C]">UT Austin '25</h3>
            </div>

            <!-- Social Media Icons -->
            <div class="flex flex-row items-center space-x-3">
                <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105"></div>
                <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105"></div>
                <div class="transition-all w-10 h-10 bg-[#876250] rounded-full hover:scale-105"></div>
            <div>
            
            </div>
        </div>
        <!-- End of Profile Tile -->    
    `;


    const profileTile = document.createElement('div');
    profileTile.innerHTML = profileTileHTML;

    console.log("profile tile created");

    return profileTile;
}
