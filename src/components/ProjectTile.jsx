import {useEffect, useState} from "react";
import Chip from "./Chip.jsx";
import HyperLinkIcon from "./HyperLinkIcon.jsx";

function ProjectTile({ project }) {

    const { name, description, image_path, live_url, git_url } = project

    const [chips, setChips] = useState(project.chips)

    const [image, setImage] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${image_path}.png`)
                setImage(response.default)
            } catch (err) {
                //setError(err)
            } finally {
                setLoaded(true)
            }
        }

        fetchImage()
    }, [image_path])

    return (
        <li className="mb-12">
            <div
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                </div>
                <div className="z-10 sm:order-2 sm:col-span-6">
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
                {loaded && <img alt="" loading="lazy" decoding="async" data-nimg="1"
                     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                     src={image}
                />}
            </div>
        </li>
    )
}

export default ProjectTile;