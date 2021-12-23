import { useEffect, useState } from "react"
import IProjectItem from "../../types/ProjectItem"
import ProjectItems from './Projects'
import './Projects.css'

const createProjectField = (item: IProjectItem, focused: boolean) => {
  return (
    <div className={`${focused ? 'Project_Focus' : 'Project_NoFocus'}`} key={item.id.toString()}>
      <span className="text-lg font-bold PSRounded flex flex-1 justify-center flex-row items-center" id={item.id.toString()}>
        {item.title} &nbsp;- &nbsp;
        {item.icon}
      </span>
      <p className="text-sm font-light PSTextGray Project_Desc">
        {item.description}
      </p>
    </div>
  )
}

// const calculateOffset =
// (selectedIndex: number, currentOffset: number, inc: boolean): [number, boolean] => {
//   if (currentOffset === 0 && inc) {
//     return [0, true]
//   } else if (currentOffset > 0 && inc) {
//     return [currentOffset + 1, false]
//   } else if (currentOffset === 0 && !inc) {
//     return [0, false]
//   } else if (currentOffset > 0 && !inc) {
//     return [currentOffset - 1, false]
//   } else {
//     return [0, false]
//   }
// }

export const Projects = () => {
  // const [isInc, setIsInc] = useState(true)
  // const [paused, setPaused] = useState(false)
  // const [startOffset, setStartOffset] = useState(0)
  // const [selectedProject, setSelectedProject] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       if (selectedProject === ProjectItems.length - 1) {
  //         setIsInc(false)
  //       } else if (selectedProject === 0 && !isInc) {
  //         setIsInc(true)
  //       }

  //       const [newOffset, inc] = calculateOffset(selectedProject, startOffset, isInc)
  //       setStartOffset(newOffset)
  //       if (inc) {
  //         setSelectedProject(selectedProject + 1)
  //       } else if (!inc && selectedProject > 0) {
  //         setSelectedProject(selectedProject - 1)
  //       }
  //     }
  //   }, 5000)
  //   return () => clearInterval(interval)
  // })

  return (
    <div 
      className="App-mainLeftBottom flex flex-col text-center justify-around overflow-scroll"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      {
        ProjectItems.map((item, index) => {
          return createProjectField(item, true)
        })
      }
    </div>
  )
}

export default Projects
