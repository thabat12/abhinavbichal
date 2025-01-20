// link data
const links = {
    Trees : [
        {
            title: "Segment Trees",
            href: "html/ds/segment_trees.html",
            imgSrc: "assets/rightarrow.svg"
        },
        {
            title: "Fenwick Trees (BIT)",
            href: "html/ds/fenwick_trees.html",
            imgSrc: "assets/rightarrow.svg"
        },
        {
            title: "Red/Black Binary Search Trees",
            href: "html/ds/red_black_trees.html",
            imgSrc: "assets/rightarrow.svg"
        }, // more here
    ],
    Automaton : [
        {
            title: "Aho-Corasick Automaton",
            href: "html/ds/aho_corasick.html",
            imgSrc: "assets/rightarrow.svg"
        }, // more here
    ],
    "Bits & Numbers" : [
        {
            title: "Bit Manipulation Tricks",
            href: "html/ds/bit_manipulation_tricks.html",
            imgSrc: "assets/rightarrow.svg"
        },
    ]
}


const linkContainer = document.getElementById('link-container-ds');

const linkGroups = Object.keys(links);
linkGroups.sort()

linkGroups.forEach(key => {
    const linkGroupElem = document.createElement("div");
    linkGroupElem.id = key;
    linkGroupElem.innerHTML = `
        <div id="${key}-link-group-elem">
            <h2>${key}</h2>

            <div id="${key}-link-group-elem-items-wrapper">
            </div>
        </div>
    `;

    // add the link group elem to the link-container
    linkContainer.appendChild(linkGroupElem);
    
    const linkGroupItemsElem = document.createElement("div");
    
    links[key].forEach(linkData => {
        const linkDataContainer = document.createElement("div");
        linkDataContainer.innerHTML = `
            <a href="${linkData.href}" class="cursor-pointer">

                <div class="flex flex-row justify-between items-center h-10">
                    <h2>${linkData.title}</h2>
                    <img src="${linkData.imgSrc}" class="h-5"></img>
                </div>
            </a>
        `;
        linkGroupItemsElem.appendChild(linkDataContainer);
    });

    // add all these items to the proper container
    document.getElementById(`${key}-link-group-elem-items-wrapper`).appendChild(linkGroupItemsElem);
        
});


    
