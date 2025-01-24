import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import getUser from "@/lib/getUser";


const Navbar = async () => {
    // Fetch user information
    const { email } = await getUser() || {};

    return (
        <nav className="bg-gray-100 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="flex  items-center justify-center rounded-md text-black font-bold text-3xl">
                        Blog
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex items-center space-x-6 font-medium border-r-2 border-gray-300 pr-6">
                        <li className="hover:underline text-black">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:underline text-black">
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>

                    {/* Authentication Links */}
                    {email ? (
                        <LogoutLink className="btn btn-primary ">Log out</LogoutLink>
                    ) : (
                        <>
                            <LoginLink className="btn btn-primary bg-black px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">Sign in</LoginLink>
                            <RegisterLink className="btn btn-secondary bg-black px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">Sign up</RegisterLink>
                        </>
                    )}
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
