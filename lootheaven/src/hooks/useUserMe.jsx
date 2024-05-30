import { useState, useEffect } from 'react';

const useUserMe = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = 'http://147.45.246.193:8082/users/me';

        fetch(endpoint, {
<<<<<<< HEAD
            
            credentials: 'include',
            headers: {
//                 'Access-Control-Allow-Origin': 'http://147.45.246.193:5173',
=======
            mode: 'no-cors',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': '*',
>>>>>>> 5f3819e3411c4d60ec65ecc451617797c5583724
                "Content-Type": "application/json" 
            },
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            setError(error);
            setLoading(false);
        });
    }, []);

    return { user, loading, error };
};

export default useUserMe;

