import Link from "next/link";

type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className='flex bg-blue-100 bg-opacity-30 p-2 m-2 rounded'>
      <ul className='flex space-x-6'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/pricing'>Pricing</Link>
      </ul>
    </nav>
  );
}
