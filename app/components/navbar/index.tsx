import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className='flex bg-blue-100 bg-opacity-30 p-2 m-2 rounded'>
      <ul className='flex space-x-6'>
        <Link href='/'>
          <HomeIcon size={24} />
          <span className='sr-only'>Home</span>
        </Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/pricing'>Pricing</Link>
      </ul>
    </nav>
  );
}
