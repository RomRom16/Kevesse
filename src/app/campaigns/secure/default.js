

import React from 'react';

const DefaultPage = () => {
    return (
        <div className="flex items-center justify-center 
                        min-h-screen bg-gradient-to-r 
                        from-red-200 to-pink-600">
            <div className="bg-white rounded-lg 
                            shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold 
                               text-gray-800 mb-4">
                    Welcome to Next.js
                </h1>
                <div className="text-gray-700">
                    <p className="mb-4">
                        You've reached the default page of Next.js.
                    </p>
                    <p className="mb-4">
                        Default.js is a very important file in 
                        Next.js projects, serving as a default
                        entry point of the project. Also, 
                        while using Next.js, sometimes you soft 
                        navigate (move between pages without fully
                        reloading the page). In that case, Next.js 
                        keeps track of the pages you were on. 
                        However, In case of hard navigation 
                        (fully reloading the page), 
                        such as clicking a link or refreshing the 
                        browser, Next.js can't remember where you
                        were. In this scenario, Next.js serves as a
                        default page created by you.
                    </p>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                    @GeeksforGeeks ❤️
                </p>
            </div>
        </div>
    );
};

export default DefaultPage;