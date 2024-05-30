import { useState, useEffect } from 'react';

function useOrders(endpointSuffix) {
    const [orders, setorders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = `http://147.45.246.193:8082/purchase/${endpointSuffix}`;
        fetch(endpoint, {
            
            credentials: 'include',
            headers: {
//                 'Access-Control-Allow-Origin': 'http://147.45.246.193:5173',
                "Content-Type": "application/json" 
            },
            // для отправки cookies, если требуется авторизация
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setorders(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
            setError(error);
            setLoading(false);
        });
    }, [endpointSuffix]); // Обновляем данные при изменении endpointSuffix

    return { orders, loading, error };
}

export default useOrders;
