import Image from 'next/image';
import Header from '../components/Header';

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="px-6 py-8">
                <div className="flex flex-col items-center">
                    <Image 
                        src="/images/band-history.jpg" 
                        alt="Band history" 
                        width={1200} 
                        height={800} 
                        className="rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mt-8">About 82 INFINITY</h1>
                    <p className="mt-4 max-w-3xl text-center">
                        82 INFINITY is a band formed in the heart of the city, blending different musical influences and backgrounds to create a unique, unmistakable sound that captivates audiences worldwide.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default About;