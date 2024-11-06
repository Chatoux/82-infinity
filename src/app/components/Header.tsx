import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-black text-white py-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    82 INFINITY
                </div>
                <ul className="flex space-x-4">
                    <li><Link href="/"><a className="hover:text-purple-400 transition">Home</a></Link></li>
                    <li><Link href="/about"><a className="hover:text-purple-400 transition">About</a></Link></li>
                    <li><Link href="/services"><a className="hover:text-purple-400 transition">Services</a></Link></li>
                    <li><Link href="/contact"><a className="hover:text-purple-400 transition">Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;