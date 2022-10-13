import { useEffect, useRef, useState } from 'react'
// import { promisify } from 'util'
import HeyThere from './components/HeyThere'
import UserProfileContext from './contexts/UserProfileContext'
import UserProfile from './modules/UserProfile'
import Projects from './modules/Projects'
import IUserProfile from './types/UserProfile'
import './App.css'

const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const App = () => {
  const entryMessageRef = useRef<HTMLDivElement>(null)
  const entryLoaderRef = useRef<HTMLDivElement>(null)
  const appMainRef = useRef<HTMLDivElement>(null)
  const [selfUser, setSelfUser] = useState<IUserProfile | null>(null)

  // What the fuck is this?
  // Why the fuck is this here?
  // How the fuck is this working?
  // Who the fuck wrote this?
  // Me. I'm the one who wrote this.
  // I'm the one who wrote this.
  // Kill me.
  useEffect(() => {
    fetch("https://api.exerra.xyz/karen/profile?id=334067823229796367&fetchUser=true").then(async x => {
      setSelfUser(await x.json())
      // return;
      // eslint-disable-next-line no-unreachable
      await sleep(1000)
      if (entryLoaderRef.current && entryMessageRef.current && appMainRef.current) {
        // Loading finished, hide the loader and animate the entry message
        entryLoaderRef.current.classList.add('PSRemove')
        await sleep(500)
        // entryLoaderRef.current.remove()

        // Start entry animation
        await sleep(200)
        entryMessageRef.current.classList.remove('PSNoAnimation')

        // Remove the entry message
        await sleep(1500)
        entryMessageRef.current.classList.add('PSRemove')
        await sleep(500)
        entryMessageRef.current.remove()

        // Make application sized and visible
        document.querySelector('.App')?.classList.add('App_Sized')
        appMainRef.current.classList.remove('PSDisplayNone')
        await sleep(250)
        appMainRef.current.classList.remove('opacity-0')
      }
    })
  }, [])

  return (
    <UserProfileContext.Provider value={selfUser as IUserProfile}>
      <div className="App">
        <div ref={entryMessageRef} className="App-entryMessage PSNoAnimation transition-opacity">
          {[...Array(3)].map((_, i) => {
            return (
              <HeyThere key={i} />
            )
          })}
        </div>
        <div ref={entryLoaderRef} className="App-entryLoader PSNoAnimation transition-opacity my-4">
          <div className="App-entryLoaderInner">
          </div>
        </div>
        <div ref={appMainRef} className="App-main EnableBubbles PSTransitionOpacity PSDisplayNone opacity-0">
          <div className="App-mainLeft" style={{ flex: '0.5' }}>
            <div className="App-mainLeftTop flex-1 flex-row justify-center">
              <UserProfile />
            </div>
            <Projects />
          </div>
          {/* <div className="App-mainRight"> */}
            {/*<div className="App-mainRightTop">
              <span className="text-2xl font-bold">
                More soon ... &lt;3
              </span>
            </div>*/}
            {/*<div className="App-mainRightBottom">
              <span className="text-2xl font-bold">
                More soon ... &lt;3
              </span>
            </div>*/}
          {/* </div> */}
        </div>
      </div>
    </UserProfileContext.Provider>
  )
}

export default App
