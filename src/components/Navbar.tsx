import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="container mx-auto px-4 py-4 flex justify-start items-center space-x-6">
        <ul className="flex space-x-4 text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600 font-bold font-serif">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 font-bold font-serif">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 font-bold font-serif">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600 font-bold font-serif">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;