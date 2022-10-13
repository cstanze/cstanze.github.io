import { FaPython } from "react-icons/fa"
import { SiCplusplus, SiTypescript, SiRust, SiApple } from "react-icons/si"
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
    title: 'Erys (WIP)',
    description: 'A compiler written in C++ for a language that allows for effective and simple code solutions across multiple platforms using LLVM',
    icon:  <SiCplusplus />,
  },
  {
    id: 2,
    title: "June",
    description: "A modular, VM-based language with components written in C and C++. Currently being rewritten in Rust for extra compatibility.",
    icon: <SiRust />
  },
  {
    id: 3,
    title: 'Zen (WIP)',
    description: 'A build system written in Python with build configuration files written in YAML',
    icon: <FaPython />,
  },
  {
    id: 4,
    title: "Mae",
    description: "A Proof of Concept Control Center replacement for iOS written in Objective-C",
    icon: <SiApple />,
  },
  {
    id: 5,
    title: 'Many more',
    description: 'Feel free to check out my GitHub for more projects',
    icon: <GoMarkGithub />,
  },
]

export default ProjectItems
