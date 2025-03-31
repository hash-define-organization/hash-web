function App() {
  return (
    <>
      <nav className="navbar flex justify-between py-10 px-12">
        <div className="logo items-center flex">Hash Define</div>
        <ul className="links flex gap-12 font-bold text-lg">
          <li>Events</li>
          <li>About</li>
          <li>Our Team</li>
        </ul>
        <button className="bg-slate-200/20 border-2 rounded-[50px] px-6 text-lg font-light">Contact Us</button>
      </nav>
    </>
  );
}

export default App;
