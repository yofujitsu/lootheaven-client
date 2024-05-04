import React, { useState, useEffect, createContext, useContext } from 'react';

// Создаем контекст для аутентификации
const AuthContext = createContext(null);

// Провайдер для контекста аутентификации
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8082/auth/status', { credentials: 'include' })
            .then(response => response.json())
            .then(data => setIsAuthenticated(data.isAuthenticated))
            .catch(error => console.error('Error checking auth status:', error));
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста аутентификации
export const useAuth = () => useContext(AuthContext);
