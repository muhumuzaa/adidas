import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"




const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start text-left">
          <a href="/">
            <img src={footerLogo} alt="adidas" width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">As you arrive in Canada – the land of opportunities, your priority is getting a job as soon as possible</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div key={icon.alt} className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) =>(
            <div key={section} className="text-left">
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) =>(
                  <li key={link.name} className="cursor:pointer text-white-400 mt-3 text-base leading-normal hover:text-slate-gray">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor:pointer">
                  <img src={copyrightSign} alt="cp" width={20} height={20} className="rounded-full m-0"/>
                  <p className="font-montserrat">All Rights reserved</p>
                  <p className="font-montserrat coursor-pointer">Terms and Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer