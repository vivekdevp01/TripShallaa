import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { theme } from "../../theme.js"

const Navbar = () => {
  const navItems = [
    { path: '/', name: 'Home', width: 'w-[77px]' },
    { path: '/rafting', name: 'Rafting', width: 'w-[77px]' },
    { path: '/camping', name: 'Camping', width: 'w-[77px]' },
    { path: '/adventure-activities', name: 'Adventure Activities', width: 'w-[154px]' },
    { path: '/vehicle-rent', name: 'Vehicle Rent', width: 'w-[154px]' },
  ];

  const NavLink = ({ to, width, children }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    return (
      <Link
        to={to}
        className={`
          ${width} ${theme.dimensions.navItem} flex items-center justify-center
          ${isActive ? 
            'font-bold text-orange-600' : 
            `${theme.colors.inactive} font-medium hover:text-orange-500`
          }
          transition-colors duration-200
          relative group
        `}
      >
        {children}
        
        <span className={`
          absolute bottom-0 left-0 h-0.5 bg-orange-600
          transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}></span>
      </Link>
    );
  };

  return (
    <nav className={`relative w-full h-[110px] border-b ${theme.colors.navBorder} bg-white shadow-sm`}>
      {/* logo */}
      <div className={`absolute ${theme.dimensions.logo} top-3 left-12 h-24 w-96 border ${theme.colors.navBorder} flex items-center justify-center`}>
        <span className={`${theme.colors.logo} text-3xl font-bold`}> Logo </span>
      </div>

      {/* routes */}
      <div className="absolute top-[40px] right-[50px] flex space-x-8">
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