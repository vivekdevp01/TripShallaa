import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { theme } from "../../theme.js";
import logo from "../../assets/logo3.png"; // Updated logo path

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Home", width: "w-[77px]" },
    { path: "/rafting", name: "Rafting", width: "w-[77px]" },
    { path: "/camping", name: "Camping", width: "w-[77px]" },
    {
      path: "/adventure-activities",
      name: "Adventure Activities",
      width: "w-[154px]",
    },
    { path: "/vehicle-rent", name: "Vehicle Rent", width: "w-[154px]" },
  ];

  const NavLink = ({ to, width, children }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link
        to={to}
        className={`
          ${width} flex items-center justify-center h-full
          ${
            isActive
              ? "font-bold text-orange-600"
              : `${theme.colors.inactive} font-medium hover:text-orange-500`
          }
          transition-colors duration-200 relative group
        `}
      >
        {children}
        <span
          className={`
            absolute bottom-0 left-0 h-0.5 bg-orange-600
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        ></span>
      </Link>
    );
  };

  return (
    <nav className="w-full h-[100px] bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-10">
      {/* Logo */}
      <div className="h-[70px] w-[140px] flex items-center">
        <img
          src={logo}
          alt="Tripshalla Logo"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 h-full items-center">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} width={item.width}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
