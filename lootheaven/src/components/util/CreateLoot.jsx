import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useUserMe from '../../hooks/useUserMe';

function CreateLoot() {

    const { user} = useUserMe();

    const [formData, setFormData] = useState({
        name: "",
        type: "ACCOUNT", 
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
                creatorId: user.id  
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

        axios.post('http://213.139.208.110:8082/loots/add', dataToSubmit)
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
        <div className="container mt-5" style={{color: '#fff'}}>
            <h2 className="mb-3" style={{color: "#fff"}}>Тут можно запостить новый товар</h2> 
            <h3 className="mb-3" style={{color: "#fff"}}>Помни, за несоблюдение правил размещения товаров, пользователь карается БАНОМ!</h3> 
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
                    <button type="submit" className="btn btn-success">Добавить</button>
                </div>
            </form>  
        </div>
        
    );
}

export default CreateLoot;