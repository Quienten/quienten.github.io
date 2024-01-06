function SideNav() {

    const sections = [
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        // {
        //     name: "Contact",
        //     href: ""
        // }
    ]

    return (
        <nav className="mt-16">
            <ul>
                {sections.map((section, i) => {
                    return <li key={i}>
                        <a href={section.href} className="group flex items-center py-3 active">
                            <span
                                className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            </span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                {section.name}
                            </span>
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default SideNav;