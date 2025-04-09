import HashLogoNav from '../assets/hash_logo_nav.png';
function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center  py-10 px-12">
      <div className="logo items-center flex">
        <img src = {HashLogoNav} className = "h-10"/>
      </div>
      <ul className="links flex gap-12 font-bold text-lg">
        <li>Events</li>
        <li>About</li>
        <li>Our Team</li>
      </ul>
      <button className="bg-slate-200/20 border-2 rounded-[50px] px-6 py-1 text-lg font-light transition duration-200 ease-in-out cursor-pointer hover:bg-white hover:text-black hover:border-black">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
