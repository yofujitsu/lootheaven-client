import { useState, useEffect } from 'react';

const useUserMe = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = 'http://213.139.208.110:8082/users/me';

        fetch(endpoint, {
            credentials: 'include'
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

