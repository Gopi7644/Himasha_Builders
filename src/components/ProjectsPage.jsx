import { PROJECTS } from '../data/projects'
import ProjectGallery from './ProjectGallary'
import BeforeAfter from '../components/BeforeAfter'
import Services from './Services'

const ProjectsPage = () => {
  return (
    <>
      <Services />
      <ProjectGallery images={PROJECTS.interior} />

      <BeforeAfter
        before={PROJECTS.interior[0]}
        after={PROJECTS.interior[1]}
      />
    </>
  )
}

export default ProjectsPage
