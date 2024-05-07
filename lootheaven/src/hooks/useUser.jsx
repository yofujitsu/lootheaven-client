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
        const endpoint = `http://79.174.82.223:8082/users/${encodeURIComponent(Number(userId))}`;

        fetch(endpoint, {
            credentials: 'include',
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
