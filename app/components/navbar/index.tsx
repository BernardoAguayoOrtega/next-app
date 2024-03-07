type Props = {};

export function Navbar({}: Props) {
  return (
    <nav className='flex bg-blue-100 bg-opacity-30 p-2 m-2 rounded'>
      <ul className='flex space-x-4'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/pricing'>Pricing</a>
        </li>
      </ul>
    </nav>
  );
}
