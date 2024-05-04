import { useState, useEffect } from 'react';

const useUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = userId ? `http://localhost:8082/users/${userId}` : 'http://localhost:8082/users/me';

        fetch(endpoint, {
            credentials: 'include' // для отправки cookies
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
    }, [userId]); // Зависимость от userId позволяет обновить данные при его изменении

    return { user, loading, error };
};

export default useUser;

