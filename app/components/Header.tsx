import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full py-6 flex items-center justify-between bg-white dark:bg-black px-10 mx-auto">
            <Link href="/">
            <Image src="/gym-oran.png" alt="Gym Logo" width={150} height={150} />
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-400">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;