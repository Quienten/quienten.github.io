import './App.css'
import { projects } from './data/projects.json'
import { experience } from "./data/experience.json"
import { socials } from "./data/socials.json"
import ProjectTile from "./components/ProjectTile.jsx";
import ExperienceTile from "./components/ExperienceTile.jsx";
import SocialButton from "./components/SocialButton.jsx"
// import GitHubIcon from "./assets/github.svg";
// import LinkedInIcon from "./assets/linkedin.svg";
// import EmailIcon from "./assets/email.svg";

function App() {



    return (
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                  <div>
                      <h1 className="text-3xl font-bold">
                          Quienten Miller
                      </h1>
                      <h2>
                          Software Engineer
                      </h2>

                      <nav>
                          <ul>
                              <li>About</li>
                              <li>Projects</li>
                              <li>Experience</li>
                              <li>Contact</li>
                          </ul>
                      </nav>
                  </div>
                  <ul className="ml-1 mt-8 flex items-center">
                      {socials.map((social, i) => {
                          return <SocialButton key={i} social={social}/>
                      })}
                  </ul>

              </header>

              <main className="pt-24 lg:w-1/2 lg:py-24">
                  <section id="about">
                      <p></p>
                      <p></p>
                      <p></p>
                  </section>

                  <section id="projects">
                    <ol>
                        {projects.map((project, i) => {
                            return <ProjectTile key={i} project={project}/>
                        })}
                    </ol>
                  </section>

                  <section id="experience">
                      <ol>
                          {experience.map((experience, i) => {
                              return <ExperienceTile key={i} experience={experience}/>
                          })}
                      </ol>
                  </section>

                  <section id="contacts">

                  </section>
              </main>
          </div>

      </div>
    )
}

export default App
