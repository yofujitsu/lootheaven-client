import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserMe from '../../hooks/useUserMe';
import './AdminTable.css';

export function AdminTable() {
    const { user, loading: userLoading, error: userError } = useUserMe();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userLoading) return; // Ожидание загрузки данных пользователя
        if (userError) {
            console.error('Error loading user data:', userError);
            return;
        }
        if (user && user.role !== 'ADMIN') {
            navigate('/error');
            return;
        }
        
        const fetchUsers = fetch('http://localhost:8082/users/all');
        const fetchOrders = fetch('http://localhost:8082/purchase/all');

        Promise.all([fetchUsers, fetchOrders])
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([usersData, ordersData]) => {
                setUsers(usersData);
                setOrders(ordersData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, [user, userLoading, userError, navigate]);

    const handleBan = (userId) => {
        fetch(`http://localhost:8082/admin/ban/${userId}`, { method: 'POST',
        credentials: 'include' 
         })
            .then(() => alert('Пользователь забанен!'))
            .catch(error => alert('Ошибка бана: ' + error.message));
    };

    const handleUnban = (userId) => {
        fetch(`http://localhost:8082/admin/unban/${userId}`, { method: 'POST',
        credentials: 'include' 
         })
            .then(() => alert('Пользователь разбанен!'))
            .catch(error => alert('Ошибка разбана: ' + error.message));
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки страницы...</div>;

    return (
        <div className="container d-flex justify-content-center flex-column" style={{color: '#fff'}}>
            <h2 className="text-center" style={{marginTop: '1em', color: '#fff'}}>Пользователи</h2>
            <table className="table-custom">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Юзернейм</th>
                        <th>Почта</th>
                        <th>Количество сделок</th>
                        <th>Дата регистрации</th>
                        <th>Статус</th>
                        <th>Роль</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.dealsCount}</td>
                            <td>{user.regDate}</td>
                            <td>{user.active ? "Активен" : "Забанен"}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleBan(user.id)}>Забанить</button>
                                <button className="btn btn-success ml-2" onClick={() => handleUnban(user.id)}>Разбанить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-center" style={{marginTop: '1em', color: '#fff'}}>Все транзакции</h2>
            <table className="table-custom">
                <thead>
                    <tr>
                        <th>Идентификатор сделки</th>
                        <th>Покупатель</th>
                        <th>Продавец</th>
                        <th>Товар</th>
                        <th>Стоимость</th>
                        <th>Статус</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.buyerId}</td>
                            <td>{order.sellerId}</td>
                            <td><a href={`/loots/${order.lootId}`}>{order.lootId}</a></td>
                            <td>{order.cost}</td>
                            <td>{order.status}</td>
                            <td>{order.orderDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminTable;
