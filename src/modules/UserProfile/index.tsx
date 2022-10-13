import { ElementType, useState } from 'react'
import { SiInstagram, SiTwitter, SiDiscord, SiMinutemailer } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"
import { IconContext } from 'react-icons'
import UserProfileContext from '../../contexts/UserProfileContext'
import './UserProfile.css'

const ProfileIcon = ({ Icon, href, activeColor, style }: { Icon: ElementType, href: string, activeColor?: string, style?: any }) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon
        color={hover ? (activeColor || 'rgb(236, 72, 153)') : '#fff'}
        style={{
          transition: 'color 0.2s ease-in-out',
          ...(hover ? (style || {}) : {}),
        }}
      />
    </a>
  )
}

export const UserProfile = () => {
  return (
    <UserProfileContext.Consumer>
      {profile => {
        return (
          <>
            <div className="Module Module_UserProfile flex flex-row justify-between">
              <img
                src={profile?.avatar.url.png}
                alt="Avatar"
                className="App-mainLeftTopAvatar rounded-full m-2 h-16 w-16"
              />
              <div 
                className="flex flex-row justify-evenly"
                style={{
                  flex: 1
                }}
              >
                <IconContext.Provider value={{size: '2em'}}>
                  <ProfileIcon
                    Icon={GoMarkGithub}
                    href={`https://github.com/${profile?.username}`}
                    activeColor="#333"
                  />
                  <ProfileIcon
                    Icon={SiInstagram}
                    href={`https://instagram.com/${profile?.profile.twitter.toLowerCase()}`}
                    // style={{
                    //   background: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                    //   backgroundClip: 'text',
                    //   transition: 'background 0.2s ease-in-out',
                    // }}
                    activeColor='#DC2743'
                  />
                  <ProfileIcon
                    Icon={SiTwitter}
                    href={`https://twitter.com/${profile?.profile.twitter}`}
                    activeColor="#1DA1F2"
                  />
                  <ProfileIcon
                    Icon={SiDiscord}
                    href={`https://discord.com/users/${profile?.id}`}
                    activeColor='#7289DA'
                  />
                  <ProfileIcon
                    Icon={SiMinutemailer}
                    // href={`mailto:${profile?.profile.email}`}
                    href={`mailto:jules.nieves0301@gmail.com`}
                    activeColor='#00D1B2'
                  />
                </IconContext.Provider>

              </div>
            </div>
            <div className="App-mainLeftTopInfo flex flex-1 flex-col">
              <span className="text-3xl PSRounded">
                {profile?.username}
                <span className="text-sm">
                  &nbsp;&nbsp;{profile?.profile.pronouns}
                </span>
              </span>
              <p className="text-sm">{profile?.profile.description}</p>
            </div>
          </>
        )
      }}
    </UserProfileContext.Consumer>
  )
};

export default UserProfile
