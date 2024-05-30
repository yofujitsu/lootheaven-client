import { useState, useEffect } from 'react';

function useLoots(endpointSuffix = '') {
    const [loots, setLoots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = `http://213.139.208.110:8082/loots${endpointSuffix ? `/${endpointSuffix}` : ''}`;
        fetch(endpoint, {
            
            credentials: 'include',
            headers: {
//                 'Access-Control-Allow-Origin': 'http://213.139.208.110:5173',
                "Content-Type": "application/json" 
            }, // для отправки cookies, если требуется авторизация
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setLoots(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching loots:', error);
            setError(error);
            setLoading(false);
        });
    }, [endpointSuffix]); // Обновляем данные при изменении endpointSuffix

    return { loots, loading, error };
}

export default useLoots;
