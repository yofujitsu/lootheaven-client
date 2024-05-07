import { useState, useEffect } from 'react';

function useLoot(endpointId = '') {
    const [loot, setLoot] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = `http://79.174.82.223:8082/loots/info/${endpointId}`;
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
            setLoot(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching loot:', error);
            setError(error);
            setLoading(false);
        });
    }, [endpointId]); // Обновляем данные при изменении endpointId

    return { loot, loading, error };
}

export default useLoot;
