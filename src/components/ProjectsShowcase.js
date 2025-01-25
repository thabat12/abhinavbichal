import ProjectsShowcaseScrollbar from "../components/ProjectsShowcaseScrollbar.js";

export default function ProjectsShowcase(projectData) {

    const projectsShowcase = document.createElement('div');
    projectsShowcase.className = "md:w-[40rem] min-h-[40rem] flex flex-col";

    // title and subtitle section
    const titleSection = document.createElement('h1');
    titleSection.className = "text-3xl font-bold tracking-wide text-[#291F1D]";
    titleSection.innerHTML = projectData.title;

    projectsShowcase.appendChild(titleSection);

    const descriptionSection = document.createElement('p');
    descriptionSection.className = "text-xl px-3 tracking-wide";
    descriptionSection.innerHTML = projectData.desc;

    projectsShowcase.appendChild(descriptionSection);

    const mediaSection = document.createElement('div');
    mediaSection.className = "grow";

    projectsShowcase.appendChild(mediaSection);

    return projectsShowcase;
}