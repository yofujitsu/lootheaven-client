import { useState, useEffect } from 'react';

const useUser = (userId) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) {
            setUser(null);
            setLoading(false);
            setError(null);
            return; // Если userId не предоставлен, выходим из useEffect
        }

        setLoading(true); // Переустанавливаем состояние загрузки перед новым запросом
        const abortController = new AbortController(); // Создание контроллера для отмены запроса
        const endpoint = `http://147.45.246.193:8082/users/${encodeURIComponent(Number(userId))}`;

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
            signal: abortController.signal
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setUser(data);
            setError(null); // Сброс ошибки при успешной загрузке
        })
        .catch(error => {
            if (error.name !== 'AbortError') {
                console.error('Error fetching user data:', error);
                setError(error);
            }
        })
        .finally(() => {
            setLoading(false);
        });

        return () => {
            abortController.abort(); // Отмена запроса при размонтировании или изменении userId
        };
    }, [userId]);

    const getAvatar = () => {
        return user ? user.avatar : null;
    };

    return { user, loading, error, getAvatar };
};

export default useUser;
