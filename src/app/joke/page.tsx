"use client"
import { useState } from 'react';

const Joke = () => {

    const [joke, setJoke] = useState('');
    const [jokeType, setJokeType] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();

            if (data.type === 'twopart') {
                // Replace spaces with non-breaking spaces to ensure proper line breaks
                const formattedSetup = data.setup.replace(/ /g, '\u00A0');
                setJoke(`${formattedSetup} ${data.delivery}`);
            } else if (data.type === 'single') {
                setJoke(data.joke);
            }

            setJokeType(data.type);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div className="m-4 p-6 max-w-md  bg-gray-100 rounded-md shadow-md overflow-hidden">
            <div className="text-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={fetchJoke}
                >
                    Generate Joke
                </button>
            </div>
            {joke && (
                <div className="mt-4">
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                        {jokeType === 'twopart' ? 'Question:' : 'Joke:'}
                    </p>
                    {jokeType === 'twopart' ? (
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: joke }} />
                    ) : (
                        <p className="text-gray-600">{joke}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Joke;
