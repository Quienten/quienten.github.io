import './App.css'
import { projects } from './data/projects.json'
import { experience } from "./data/experience.json"
import { socials } from "./data/socials.json"
import ProjectTile from "./components/projects/ProjectTile.jsx";
import ExperienceTile from "./components/ExperienceTile.jsx";
import SocialButton from "./components/SocialButton.jsx"
import SideNav from "./components/SideNav.jsx";
import HyperLinkIcon from "./components/HyperLinkIcon.jsx";
import Resume from "./resume.pdf"

function App() {



    return (
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
                  <div>
                      <h1 className="text-4xl font-bold tracking-wide">
                          Quienten Miller
                      </h1>
                      <h2>
                          Software Engineer
                      </h2>

                      <SideNav/>
                  </div>
                  <ul className="ml-1 mt-8 flex items-center">
                      {socials.map((social, i) => {
                          return <SocialButton key={i} social={social}/>
                      })}
                  </ul>

              </header>

              <main className="pt-24 lg:w-7/12 lg:py-24">
                  <section id="about" className="mb-16 lg:mb-24">
                      <p>{"My name is Quienten, I'm a student at the University of Washington Tacoma. " +
                          "Passionate about developing cutting-edge software. I spend my day expanding my " +
                          "computer science knowledge and communicating ideas to my peers."}</p>
                      <p></p>
                      <p></p>
                  </section>

                  <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                      <ol>
                          {projects.map((project, i) => {
                              return <ProjectTile key={i} project={project}/>
                          })}

                          <div className="mt-12">
                              <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                                  href="https://github.com/Quienten" target="_blank" rel="noreferrer noopener"
                                  aria-label="View Projects on GitHub (opens in a new tab)">
                                  <span>
                                      View Projects on GitHub <HyperLinkIcon/>
                                  </span>
                              </a>
                          </div>
                      </ol>
                  </section>

                  <section id="experience">
                      <ol>
                          {experience.map((experience, i) => {
                              return <ExperienceTile key={i} experience={experience}/>
                          })}

                          <div className="mt-12">
                              <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                                  href={Resume} target="_blank" rel="noreferrer noopener"
                                  aria-label="View Full Resume (opens in a new tab)">
                                  <span>
                                      View Full Resume <HyperLinkIcon/>
                                  </span>
                              </a>
                          </div>
                      </ol>


                  </section>

                  {/*<section id="contact">*/}

                  {/*</section>*/}
              </main>
          </div>

      </div>
    )
}

export default App
