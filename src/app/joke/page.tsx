"use client"

import { useState } from 'react';

import { Button } from "@/components/ui/button"

const Joke = () => {
    const [joke, setJoke] = useState(null);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();

            setJoke(data);
        } catch (error) {
            console.error('Error fetching or processing joke:', error);
        }
    };

    const handleShare = () => {
        // You can implement the logic to share the joke here
        if (navigator.share) {
            navigator.share({
                title: 'Check out this joke!',
                text: joke.type === 'twopart' ? `${joke.setup} ${joke.delivery}` : joke.joke,
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            console.warn('Web Share API not supported');
            // You can provide a fallback sharing method for browsers that don't support Web Share API
        }
    };

    const renderJoke = () => {
        if (!joke) {
            return null;
        }

        const { type, setup, delivery, joke: singleJoke } = joke;

        return (
            <div className="mt-4">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                    {type === 'twopart' ? 'Question:' : 'Joke:'}
                </p>
                {type === 'twopart' ? (
                    <>
                        <p className="text-gray-600">{setup}</p>
                        <p className="text-gray-600">{delivery}</p>
                    </>
                ) : (
                    <p className="text-gray-600">{singleJoke}</p>
                )}
 
                <Button className="mt-4"   onClick={handleShare}>Share</Button>

            </div>
        );
    };

    return (
        <div className="m-4 p-6 bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="text-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={fetchJoke}
                >
                    Generate Joke
                </button>
            </div>
            {renderJoke()}
        </div>
    );
};

export default Joke;


