import {useState} from "react";
import Chip from "../Chip.jsx";
import HyperLinkIcon from "../HyperLinkIcon.jsx";
import GitHubIcon from "../../assets/github.svg";
import ProjectImage from "./ProjectImage.jsx";
import SelfReferenceGag from "./SelfReferenceGag.jsx";

function ProjectTile({ project }) {

    const { name, description, image_path, live_url, git_url } = project

    const [chips] = useState(project.chips)



    return (
        <li className="mb-12">
            <div
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md
                    transition motion-reduce:transition-none lg:-inset-x-6 lg:block
                    lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                </div>
                {name === "Portfolio Website" ? <SelfReferenceGag/> : <ProjectImage image_path={image_path}/>}
                <div className="z-0 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                           href={live_url} target="_blank" rel="noreferrer noopener">
                            <span
                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                            </span>
                            <span>
                                {name}
                                <HyperLinkIcon/>
                            </span>
                        </a>
                    </h3>
                    {project.tagline && <p className="italic mt-2 text-sm leading-normal">
                        {project.tagline}
                    </p>}
                    <p className="mt-2 text-sm leading-normal">
                        {description}
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                        {chips.map((text, i) => {
                            return <li className="mr-1.5 mt-2" key={i}>
                                <Chip text={text}/>
                            </li>
                        })}
                    </ul>
                </div>
                {git_url && <a href={git_url} className="z-50 absolute right-0 bottom-0 group/git">
                    <span
                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block ">
                    </span>
                    <img src={GitHubIcon}
                         className="inline-block h-6 w-6 shrink-0 ml-1 "/>
                </a>}

            </div>
        </li>
    )
}

export default ProjectTile;