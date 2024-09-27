// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center">
        <Link href="/" className="flex items-center">
          <img
            src="/pokemon.png"
            alt="Pokemon"
            height={200}
            width={300}
            // className="w-auto"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
