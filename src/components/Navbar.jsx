import logo from "../assets/LOGO.png";

function Navbar() {
  return (
    <nav className="navbar flex justify-between py-10 px-12">
      <div className="logo items-center flex h-8 w-28">
        <img src={logo} alt="define_logo" />
      </div>
      <ul className="links flex gap-12 font-semibold text-lg">
        <li><a href="#">Events</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Our Team</a></li>
      </ul>
      <button className="bg-slate-300/30 border-1 rounded-[30px] px-6 text-lg font-light text-opacity-50">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
