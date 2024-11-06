import Image from 'next/image';
import Header from '../components/Header';

const Services = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="px-6 py-8">
                <div className="flex flex-col items-center">
                    <Image 
                        src="/images/live-performance.jpg" 
                        alt="Live performances" 
                        width={1200} 
                        height={800} 
                        className="rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mt-8">Our Services</h1>
                    <p className="mt-4 max-w-3xl text-center">
                        From live performances to musical arrangements and compositions, 82 INFINITY offers a range of services to bring music to audiences in innovative and electrifying ways.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Services;