import { useState, useEffect } from 'react';

function useLoots(endpointSuffix = '') {
    const [loots, setLoots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = `http://147.45.246.193:8082/loots${endpointSuffix ? `/${endpointSuffix}` : ''}`;
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
