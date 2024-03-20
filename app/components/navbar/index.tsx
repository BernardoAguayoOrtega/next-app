import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

type navbarItem = {
  ref: string;
  label: string;
  icon?: React.ReactNode;
};

const navbarItems: navbarItem[] = [
  { ref: "/", label: "Home", icon: <HomeIcon size={24} /> },
  { ref: "/about", label: "About", },
  { ref: "/contact", label: "Contact" },
  { ref: "/pricing", label: "Pricing" },
];

type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className='flex bg-blue-100 bg-opacity-30 p-2 m-2 rounded'>
      <ul className='flex space-x-6'>
        {navbarItems.map((item) => (
          <li key={item.ref}>
            <Link href={item.ref}>
              <span className='flex items-center space-x-2'>
                {item.icon}
                <span>{item.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
