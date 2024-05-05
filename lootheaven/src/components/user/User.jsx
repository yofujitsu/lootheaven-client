import React from 'react';
import { useParams } from 'react-router-dom'; // Импорт useParams
import useUser from '../../hooks/useUser';
import LootsList from '../catalog/LootsList';

function User() {
    const { id } = useParams(); // Получение userId из параметров маршрута
    const { user, loading, error } = useUser(id); // Преобразование id в число и передача в useUser

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{color: '#fff'}}><b>Error: {error.toString()}</b></div>;
    if (!user) return <div style={{color: '#fff'}}><b>No user data available.</b></div>;

    return (
        <div style={{display: 'flex', margin: '1em', alignItems: 'center', flexDirection: 'column', color: '#fff'}}>
            <h1>Это страница {user.username}</h1>
            <img src={user.avatar} alt="User Avatar" /> {/* Добавьте атрибут alt для изображения */}
            <p>Количество сделок: {user.dealsCount}</p>
            <LootsList endpointSuffix={id}/>
        </div>
    );
}

export default User;
