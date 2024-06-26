import React from 'react';
import useUser from '../../hooks/useUser';

function LootRow({ loot, svg }) {
    const { user, loading, error } = useUser(loot.creatorId);

    if (loading) return <tr><td colSpan="6">Загрузка...</td></tr>;
    if (error) return <tr><td colSpan="6">Ошибка: Не получилось загрузить данные.</td></tr>;

    return (
        <tr>
            <td>{svg}</td>
            <td>{loot.type}</td>
            <td><a href={`/loots/${loot.id}`}>{loot.name}</a></td>
            <td>{loot.price}</td>
            <td>{loot.description}</td>
            <td>
                <a href={`/users/${loot.creatorId}`}>
                    {user && user.avatar && <img src={user.avatar} alt="Avatar" style={{ width: '3em', height: '3em', borderRadius: '50%' }} />}
                </a>
            </td>
        </tr>
    );
}

export default LootRow;

