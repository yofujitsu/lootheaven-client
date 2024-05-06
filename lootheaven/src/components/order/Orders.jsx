import React from 'react'
import useOrders from '../../hooks/useOrders';
import useUserMe from '../../hooks/useUserMe';
import './Orders.css'

export default function Orders({endpointSuffix}) {
    const {orders, loading, error} = useOrders(endpointSuffix);
    const {user} = useUserMe();

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // возвращает дату в формате "YYYY-MM-DD"
      }
    
    if (loading) return <b style={{color: '#fff'}}>Загрузка...</b>;
    if (error) return <b style={{color: '#fff'}}>Ошибка: не удалось получить сделки.</b>;
    if (!orders) return <b style={{color: '#fff'}}>Вы еще не провели ни одной сделки...</b>;

    return (
        <>
        {orders.length === 0 && <h3 align='center' style={{paddingTop: '1em'}}><b>Тут пусто...</b></h3>}
        {orders.length > 0 && (
        <table class='table-custom'>
            <thead>
                <tr>
                    <th>Тип</th>
                    <th>Идентификатор товара</th>
                    <th>Стоимость</th>
                    <th>Дата</th>
                    <th>Контрагент</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => {
                    const isSeller = order.sellerId === user.id;
                    const type = isSeller ? 'Продажа' : 'Покупка';
                    const counterpartyId = isSeller ? order.buyerId : order.sellerId;

                    return (
                        <tr key={order.id}>
                            <td>{type}</td>
                            <td>{order.lootId}</td>
                            <td>{order.cost} Коинов</td>
                            <td>{formatDate(order.orderDate)}</td>
                            <td><a href={`/users/${counterpartyId}`}>Контрагент заказа</a></td> 
                        </tr>
                    );
                })}
            </tbody>
        </table>
        )}
        </>
        
    );
}
