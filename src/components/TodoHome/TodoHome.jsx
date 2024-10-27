import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Home = () => {

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add animation after component mounts
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center">
            <div className={`text-center pb-20 transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="mb-6 flex justify-center">
                    <CheckCircle
                        size={200}
                        className="text-white animate-pulse"
                    />
                    <div className="absolute inset-0 bg-white opacity-20 blur-xl rounded-full scale-150"></div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4 tracking-wider">
                    Todo App
                </h1>

                {/* Loading Animation */}
                <div className="flex justify-center gap-2 mt-8">
                    <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
                    <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                </div>

                <p className="text-white/80 mt-6 text-lg">
                    Organize your tasks with ease
                </p>
            </div>
        </div>
    );
};

export default Home;