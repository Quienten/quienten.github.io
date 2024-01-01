import './App.css'
import { projects } from './data/projects.json'
import ProjectTile from "./components/ProjectTile.jsx";

function App() {

    return (
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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


              </header>

              <main className="pt-24 lg:w-1/2 lg:py-24">
                  <section id="about">
                      <p></p>
                      <p></p>
                      <p></p>
                  </section>

                  <section id="projects">
                    <ul>
                        {projects.map((project, i) => {
                            return <ProjectTile key={i} project={project}/>
                        })}
                    </ul>
                  </section>

                  <section id="experience">

                  </section>

                  <section id="contacts">

                  </section>
              </main>
          </div>

      </div>
    )
}

export default App
