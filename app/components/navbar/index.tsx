import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link";

type navbarItem = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};

const navbarItems: navbarItem[] = [
  { path: "/", label: "Home", icon: <HomeIcon size={24} /> },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/pricing", label: "Pricing" },
];

type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className='flex bg-blue-100 bg-opacity-30 p-2 m-2 rounded'>
      <ul className='flex space-x-6'>
        {navbarItems.map((item) => (
          <li key={item.path}>
            <ActiveLink
              key={item.path}
              label={item.label}
              path={item.path}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
