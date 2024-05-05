import React, { useEffect, useState } from 'react';
import useUserMe from '../../hooks/useUserMe';
import BalanceTopUp from '../util/BalanceTopUp';
import axios from 'axios';
import useLoots from '../../hooks/useLoots';
import LootsList from '../catalog/LootsList';


function UserProfile() {
    const { user, loading, error } = useUserMe();


    function AddLoot() {

        const [formData, setFormData] = useState({
            name: "",
            type: "ACCOUNT", // Установим значение по умолчанию
            description: "",
            price: 0,
            status: "",
            productName: "",
            creatorId: 0,
            contentUrl: ""
        });
    
        useEffect(() => {
            if (user) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    creatorId: user.id  // обновляем значение creatorId, когда user доступен
                }));
            }
        }, [user]);
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const dataToSubmit = {
                ...formData,
                published: new Date().toISOString()
            };
    
            axios.post('http://localhost:8082/loots/add', dataToSubmit)
                .then(response => {
                    console.log("Data successfully sent!", response.data);
                })
                .then(data => {
                    alert('Товар успешно размещен!');
                    window.location.href = "http://localhost:5173/me"; 
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        };
    
        return (
            <div className="container mt-5">
                <h2 className="mb-3">Создание товара</h2> 
                <form onSubmit={handleSubmit} className="container mt-3">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <input type="text" className="form-control" id="productName" name="productName" value={formData.productName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <select className="form-control" id="type" name="type" value={formData.type} onChange={handleChange} required>
                            <option value="ACCOUNT">Account</option>
                            <option value="ITEM">Item</option>
                            <option value="KEY">Key</option>
                            <option value="CURRENCY">Currency</option>
                            <option value="GAME_PASS">Game Pass</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input type="text" className="form-control" id="status" name="status" value={formData.status} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contentUrl">Content URL:</label>
                        <input type="text" className="form-control" id="contentUrl" name="contentUrl" value={formData.contentUrl} onChange={handleChange} required />
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Добавить</button>
                    </div>
                </form>  
            </div>
            
        );
    }
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;
    if (!user) return <div>No user data available.</div>;


    return (
        <div style={{display: 'flex', margin: '1em', alignItems: 'center', flexDirection: 'column', color: '#fff'}}>
            <h1>Это страница {user.username}</h1>
            <img style={{borderRadius: '50%'}} src={user.avatar}></img>
            <p>email: {user.email}</p>
            <p>Количество сделок: {user.dealsCount}</p>
            <p>Количетсво покупок: {user.ordersCount}</p>
            <h3 align='center'>Ваши товары</h3>
            <LootsList endpointSuffix={'my'}/>
            <p>balance: {user.balance} 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin-yuan" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em">
                        <path d="M0 0h24v24H0z" stroke="none"/>
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M9 13h6M9 8l3 4.5M15 8l-3 4.5V17"/>
                    </svg>
            </p>
            <BalanceTopUp/>
            <AddLoot/>
        </div>
    );
}



export default UserProfile;
