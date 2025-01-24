import Link from "next/link";

const Navbar = async () => {
    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-semibold text-white bg-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        MS
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex font-medium space-x-8">
                        <li>
                            <Link href="/" className="text-gray-200 hover:text-primary transition duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-gray-200 hover:text-primary transition duration-300">Profile</Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center space-x-4">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
