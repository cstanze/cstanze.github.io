import { FaPython } from "react-icons/fa"
import { SiCplusplus, SiTypescript } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"
import IProjectItem from "../../types/ProjectItem"


export const ProjectItems: IProjectItem[] = [
  {
    id: 0,
    title: 'This Website',
    description: 'This website is built using React, TypeScript, and CSS. It is hosted on GitHub Pages.',
    icon: <>
    <SiTypescript />
    </>,
  },
  {
    id: 1,
    title: 'Blossom & Rose (in progress)',
    description: 'Interpreted/Compiled language specifications and an accompanying compiler/VM',
    icon:  <SiCplusplus />,
  },
  {
    id: 2,
    title: 'Zen',
    description: 'Simple and minimalistic build system',
    icon: <FaPython />,
  },
  {
    id: 3,
    title: 'Many more',
    description: 'Check out my GitHub for more projects',
    icon: <GoMarkGithub />,
  },
]

export default ProjectItems
