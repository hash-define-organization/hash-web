function Footer() {
  return (
    <footer className="w-full">
      <div className="flex items-center justify-between px-12 py-8">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO HERE</div>

        {/* Social Media Icons */}
        <div className="grid grid-cols-2 gap-3">
          {["Logo 1", "Logo 2", "Logo 3", "Logo 4"].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-20 bg-gray-300 rounded-lg"
            >
              <p className="text-sm font-medium">{logo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="w-full h-20 flex items-center justify-center text-lg font-semibold">
        <p>"May the code be with you."</p>
      </div>
    </footer>
  );
}

export default Footer;
