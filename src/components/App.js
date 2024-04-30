import React, {useEffect, useState } from 'react';

function App() {
    const [url, setUrl] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then((data) => {
                setUrl(data.message)
                setIsLoaded(true)
            });


    }, []);

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <div className="App">
            <img src={url} alt="A Random Dog" />
        </div>
    );
}

export default App;