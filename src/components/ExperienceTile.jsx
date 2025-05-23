import HyperLinkIcon from "./HyperLinkIcon.jsx";

function ProjectTile({ experience }) {

    const { company, role, description, start, end, url } = experience

    const separationDot = " · "
    const separationDash = " — "

    const formattedDescription = typeof description === "string" ? [description] : description

    return (
        <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md
                    transition motion-reduce:transition-none lg:-inset-x-6 lg:block
                    lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={`${start} to ${end}`}>{start}{separationDash}{end}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300
                                group/link text-base"
                                href={url} target="_blank" rel="noreferrer noopener"
                                aria-label={`${role} at ${company} (opens in a new tab)`}
                            >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">

                                    </span>
                                    <span>{role}{separationDot}{company}</span>
                                    {url && <HyperLinkIcon/>}
                            </a>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                        {formattedDescription.map((description, index) => (
                            <span key={index} className="block mt-2 text-slate-300">{description}</span>
                        ))}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default ProjectTile;