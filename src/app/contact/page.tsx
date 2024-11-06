import Header from '../components/Header';

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="px-6 py-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold mt-8">Contact Us</h1>
                    <p className="mt-4 max-w-3xl text-center">
                        For bookings, collaborations, or any inquiries, please reach out to us. We look forward to connecting with you.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Contact;