import Image from 'next/image';
import Header from './components/Header';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="px-6 py-8">
                <div className="flex flex-col items-center">
                    <Image 
                        src="/hero-band.jpg" 
                        alt="82 INFINITY Band" 
                        width={1200} 
                        height={800} 
                        className="rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mt-8">Welcome to 82 INFINITY</h1>
                    <p className="mt-4 max-w-3xl text-center">
                        Experience the fusion of melodies and rhythms with 82 INFINITY, a band that resonates with the soul and ignites your passion for music.
                    </p>
                    <Link href="https://open.spotify.com/artist/1aDjCxL8J6Hb02pMLRfh7y?autoplay=true">
                      <a className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                        Listen Now
                      </a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;