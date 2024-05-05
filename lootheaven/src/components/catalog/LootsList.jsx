import React from 'react';
import useLoots from '../../hooks/useLoots';
import LootRow from './LootRow';  
import './LootsList.css'

function LootsList({ endpointSuffix }) {
    const { loots, loading, error } = useLoots(endpointSuffix);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Тут пусто...</div>;

    return (
        <div style={{ margin: '1em 10em 1em 10em', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
            <table className='table-custom'>
                <thead>
                    <tr>
                        <th>Сервис</th>
                        <th>Тип</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Описание товара</th>
                        <th>Продавец</th>
                    </tr>
                </thead>
                <tbody>
                    {loots.map(loot => (
                        <LootRow key={loot.id} loot={loot} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LootsList;

