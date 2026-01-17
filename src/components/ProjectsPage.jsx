import { useState } from 'react'
import Services from './Services'
import ProjectGallery from './ProjectGallery'

const ProjectsPage = () => {
  const [active, setActive] = useState('interior')

  return (
    <>
      <Services onSelect={setActive} />
      <ProjectGallery active={active} />
    </>
  )
}

export default ProjectsPage
