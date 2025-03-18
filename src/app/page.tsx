import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faTwitch, faGithub, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    "icon": faGithub,
    "url": "http://github.com/petster",
  },
  {
    "icon": faLinkedin,
    "url": "https://linkedin.com/in/jasontpalmeri",
  }
]

export default function Home() {
  return (
    <div className="flex flex-grow content-center items-center justify-center">
      <div id="indexCard" className="text-center space-y-2 p-6 text-white rounded-xl">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-open-sans text-center">Jason Palmeri</h1>
          <h2 className="text-lg sm:text-md md:text-2xl text-white text-center font-open-sans">Developer & Editor</h2>
          <div className="flex flex-row justify-center items-center content-center text-center pt-4 gap-6">
            {socialLinks.map((da, index) =>
              <div key={index}>
                <a href={da.url} target="_blank" rel="noreferrer">
                  <span className="sr-only">{da.url}</span><FontAwesomeIcon size='2x' className="text-white hover-socials hover:drop-shadow-lg" icon={da.icon} />
                </a>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}
