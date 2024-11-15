import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-gray-800">Stablo Clone</a>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior >
              <a className="text-gray-600 hover:text-gray-800">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
