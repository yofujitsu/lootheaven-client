import React from 'react';
import { useParams } from 'react-router-dom'; // Импорт useParams
import useUser from '../../hooks/useUser';
import LootsList from '../catalog/LootsList';

function User() {
    const { id } = useParams(); // Получение userId из параметров маршрута
    const { user, loading, error } = useUser(id); // Преобразование id в число и передача в useUser

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки данных.</div>;
    if (!user) return <div>Не найдено данных пользователя.</div>;

    return (
        <div style={{display: 'flex', marginTop: '1em', alignSelf: 'center', alignItems: 'center', flexDirection: 'column', color: '#fff', width: '70%'}}>
            <h1>Это страница {user.username}</h1>
            <img src={user.avatar} alt="User Avatar" style={{borderRadius: '50%', width: '150px'}}/> {/* Добавьте атрибут alt для изображения */}
            {user.active === true && <h2><b>Пользователь активен</b></h2>}
            {user.active === false && <h2><b>Пользователь в бане</b></h2>}
            <p><b>Количество сделок: {user.dealsCount}</b></p>
            {user.active === true && ( <h3>Товары {user.username}</h3> &&
            <LootsList endpointSuffix={id}/>) }
            
            <img src='https://www.picng.com/upload/anime_girl/png_anime_girl_40811.png' style={{ width: '30%', marginTop: '2em'}}></img>
        </div>
    );
}

export default User;
