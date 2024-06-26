import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки



    useEffect(() => {
        
        const useFetch = async () => {
            await fetch('http://147.45.246.193:8082/auth/status', { credentials: 'include', headers: {
//                 'Access-Control-Allow-Origin': 'http://147.45.246.193:5173',
            }, })
            .then(response => response.json())
            .then(data => {
                setIsAuthenticated(data.isAuthenticated);
                console.log(data.isAuthenticated);
                setIsLoading(false); // Завершаем загрузку после получения данных
            })
            .catch(error => {
                console.error('Error checking auth status:', error);
                setIsLoading(false); // Также завершаем загрузку в случае ошибки
            });
    }; useFetch();}, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
