import { useState, useEffect } from 'react';

function useOrders(endpointSuffix) {
    const [orders, setorders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endpoint = `http://79.174.82.223:8082/purchase/${endpointSuffix}`;
        fetch(endpoint, {
            credentials: 'include' // для отправки cookies, если требуется авторизация
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
