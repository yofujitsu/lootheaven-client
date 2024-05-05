// Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Библиотека для HTTP запросов
import { Table } from 'react-bootstrap'; // Используем таблицу из Bootstrap

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState({});

  // Загрузка данных продуктов
  useEffect(() => {
    axios.get('http://localhost:8082/loots')
      .then(response => {
        setProducts(response.data);
        // Загрузка аватарок пользователей
        response.data.forEach(product => {
          if (!users[product.creatorId]) { // Загрузить данные пользователя, если они ещё не загружены
            axios.get(`http://localhost:8082/users/${product.creatorId}`)
              .then(userResponse => {
                setUsers(prevUsers => ({
                  ...prevUsers,
                  [product.creatorId]: userResponse.data.avatar
                }));
              })
              .catch(error => console.error('Error loading user data:', error));
          }
        });
      })
      .catch(error => console.error('Error loading products:', error));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Type</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Creator</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.productName}</td>
            <td>{product.type}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.description}</td>
            <td>
              {users[product.creatorId] && (
                <a href={`/users/${product.creatorId}`}>
                  <img src={users[product.creatorId]} alt="Avatar" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Catalog;

