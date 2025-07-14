import { NavLink } from 'react-router-dom';

const profileLinks = [
  { name: 'Personal Info', path: '/profile/personal-info' },
  { name: 'Login & Security', path: '/profile/login-security' },
  { name: 'My Payments', path: '/profile/payments' },
  { name: 'My Orders', path: '/profile/orders' },
];

export default function ProfileSidebar() {
  const baseStyle = "block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200";
  const inactiveStyle = "hover:bg-gray-100 dark:hover:bg-gray-700";
  const activeStyle = "bg-primary text-white font-semibold";

  return (
    <aside className="sticky top-28">
      <nav className="space-y-2">
        <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
        {profileLinks.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
