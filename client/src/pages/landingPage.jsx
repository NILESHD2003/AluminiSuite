import React, { useEffect } from 'react';
import RetroGrid from '@/components/ui/retro-grid';
import ShinyButton from '@/components/ui/shiny-button';
import { MeteorDemo } from '@/userComponents/MeteorDemo';
import FlipText from '@/components/ui/flip-text';
import { BentoDemo } from '@/userComponents/Bento';
import { MarqueeDemo } from '@/userComponents/MarqueeDemo';
import Footer from '@/userComponents/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in milliseconds
            easing: 'ease-in-out', // easing type
            once: true, // whether animation should happen only once
        });
    }, []);

    return (
        <div className=' mt-8 flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16'>
            {/* Meteor Background Animation */}
            <div className='absolute z-0 inset-0'>
                <MeteorDemo />
            </div>

            {/* Header */}
            <div className='w-full flex items-center justify-between mb-6 md:mb-8 z-100' data-aos="fade-down">
                <h1 className='text-xl md:text-3xl font-bold text-[#14213d]'>
                    Alumni<span className='text-[#fca311]'>Suite</span>
                </h1>
                <Link to='/login'>
                    <ShinyButton className='shadow-2xl border border-[1px] px-4 py-2 ' onClick={() => window.location.href = '/login'}>
                        Login
                    </ShinyButton>
                </Link>
            </div>

            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center w-full h-[400px] md:h-screen overflow-hidden bg-white rounded-lg mb-8" data-aos="fade-up">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
                    <div className="absolute inset-0 opacity-40" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-2xl md:text-6xl font-bold text-[#14213d] mb-2">Welcome To</span>
                    <span className="whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-6xl md:text-9xl font-bold leading-none tracking-tighter text-transparent">AlumniSuite</span>
                    <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-md">Connect with your peers, share knowledge, and enhance your professional network seamlessly.</p>
                    <div className="mt-6">
                        <button className="px-6 py-2 bg-[#fca311] text-white font-semibold rounded-md shadow-md hover:bg-[#d89b08] transition duration-300">Get Started</button>
                        <button className="ml-4 px-6 py-2 border border-[#fca311] text-[#fca311] font-semibold rounded-md shadow-md hover:bg-[#fca311] hover:text-white transition duration-300">Learn More</button>
                    </div>
                </div>
                <RetroGrid />
            </div>
            <div className='w-full h-screen '>

                {/* Features Section */}
                <FlipText
                    className="text-4xl md:text-6xl font-bold my-6 md:my-8 tracking-wide text-black dark:text-white"
                    word="Features"
                    data-aos="fade-up"
                />
                {/* Bento Cards Section */}
                <div className="w-full mb-8" data-aos="fade-up">
                    <BentoDemo />
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full my-8 " data-aos="fade-up">
                <h1>Feedbacks</h1>
                <MarqueeDemo />
            </div>

            {/* Footer */}
            <div className="w-full mb-8" data-aos="fade-up">
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
