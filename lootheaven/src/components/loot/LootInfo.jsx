import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useLoot from '../../hooks/useLoot';

import './LootInfo.css'

function LootInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loot, loading, error } = useLoot(id);

    const handlePurchase = () => {
        // Подтверждение покупки
        const isConfirmed = window.confirm(`С вашего баланса спишется ${loot.price} коинов. Точно хотите приобрести данный товар?`);
        if (!isConfirmed) return;

        // POST-запрос для осуществления покупки
        fetch(`http://213.139.208.110:8082/purchase/${loot.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
//                 'Access-Control-Allow-Origin': 'http://213.139.208.110:5173',

            },
            credentials: 'include' // При необходимости авторизации
        })
        .then(response => {
            if (!response.ok) throw new Error('Что-то пошло не так...');
            return response.text(); // Ожидаем текстовый ответ
        })
        .then(contentUrl => {
            // Сохраняем полученную ссылку в виде текстового файла
            const element = document.createElement('a');
            const file = new Blob([contentUrl], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "download.txt";
            document.body.appendChild(element); // Добавляем элемент в DOM
            element.click(); // Имитируем клик по ссылке для скачивания файла
            element.remove(); // Удаляем элемент из DOM
            alert('Покупка успешна');
        })
        .catch(error => {
            alert('Ошибка покупки: ' + 'Что-то пошло не так..');
        });
    };

    if (loading) return <div className="text-center text-white">Загрузка...</div>;
    if (error) return <div className="text-center text-white">Не получилось подгрузить данные.</div>;
    if (!loot) return <div className="text-center text-white">Товар не найден.</div>;

    return (
        <div className="loot-info-container">
            <h2>{loot.name}</h2>
            <p>Тип: {loot.type}</p>
            <p>Цена: {loot.price}</p>
            <p>Описание: {loot.description}</p>
            {loot.status !== 'sold' && (
                <button className="btn btn-success" onClick={handlePurchase}>Приобрести</button>
            )}
            <div>
            <a className="btn btn-danger mt-3" href='/loots'>Обратно в каталог</a>
            </div>
            <img src='https://www.pngarts.com/files/12/Anime-Girl-PNG-Image.png' style={{ width: '30%', marginTop: '2em'}}></img>
        </div>
    );
}

export default LootInfo;
