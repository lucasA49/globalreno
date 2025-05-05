import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="w-full flex justify-end items-center bg-gray-300 gap-30 h-15 p-9">
      {[
        { to: '/', label: 'Accueil' },
        { to: '/toiture', label: 'Toiture' },
        { to: '/facade', label: 'Façade' },
        { to: '/isolation', label: 'Isolation' },
        { to: '/devis', label: 'Devis' },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${
              isActive ? 'bg-red-500' : 'hover:bg-gray-300'
            } text-black font-medium rounded-full px-6 py-3 w-32 text-center`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
