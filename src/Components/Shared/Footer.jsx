const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-6 mt-10 border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Blog. All Rights Reserved.
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/sumu9897" className="text-sm hover:text-primary transition duration-300">GitHub</a>
                    <a href="https://www.linkedin.com/in/md-sumon9897" className="text-sm hover:text-primary transition duration-300">LinkedIn</a>
                    <a href="mailto:mohammad.sumon9897@gmail.com" className="text-sm hover:text-primary transition duration-300">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
