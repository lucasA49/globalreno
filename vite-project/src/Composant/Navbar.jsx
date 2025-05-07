import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menu = [
    { to: "/", label: "Accueil" },
    { to: "/toiture", label: "Toiture" },
    { to: "/facade", label: "Façade" },
    { to: "/isolation", label: "Isolation" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center bg-gray-300 gap-30 h-15 p-9">
                     <NavLink to="/" >

      <img className="w-23 " src="logo-header.png" alt="logo_global_reno" />
                     </NavLink>
      <div className=" flex ">
        {menu.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${
                isActive ? "bg-[#9ac575]" : "hover:bg-gray-300"
              } text-black font-medium rounded-full px-6 py-3 w-32 text-center`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
