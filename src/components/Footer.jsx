import discordIcon from "../assets/discord.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import logo from "../assets/LOGO.png";

function Footer() {
  const socialIcons = [
    { src: instagramIcon, alt: "Instagram", name: "Instagram" },
    { src: twitterIcon, alt: "Twitter", name: "Twitter" },
    { src: linkedinIcon, alt: "LinkedIn", name: "LinkedIn" },
    { src: discordIcon, alt: "Discord", name: "Discord" },
  ];

  return (
    <footer className="w-full h-52">
      <div className="flex items-center justify-between px-12 py-8 h-52">
        {/* Logo */}
        <div className="w-32 h-16">
          <img src={logo} alt="define_logo" />
        </div>

        {/* Social Media Icons */}
        <div className="grid grid-cols-2 gap-3">
          {socialIcons.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-12 w-12 rounded-lg"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 w-12" />
              {/* <p className="text-sm font-medium mt-1">{logo.name}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="w-full flex items-center justify-center text-lg font-medium">
        <p className="italic">"May the code be with you."</p>
      </div>
    </footer>
  );
}

export default Footer;