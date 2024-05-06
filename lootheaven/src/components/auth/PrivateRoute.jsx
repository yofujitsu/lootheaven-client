import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth();

    // Показываем индикатор загрузки, пока идет проверка аутентификации
    if (isLoading) {
        return null;
    }

    // Если не загружаем, то проверяем аутентификацию и либо показываем содержимое, либо редиректим на логин
    return isAuthenticated ? children : <Navigate to="/login"/>;
}

export default PrivateRoute;
