import React, { useState } from 'react';
import './Balance.css'

function BalanceTopUp() {
    const [amount, setAmount] = useState('');

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (window.confirm("Вы точно хотите пополнить баланс?")) {
            fetch(`http://213.139.208.110:8082/users/balance?amount=${amount}`, {
                method: 'PATCH',
                
                credentials: 'include',
                headers: {
    //                 'Access-Control-Allow-Origin': 'http://213.139.208.110:5173',
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({ amount }) 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert('Баланс успешно пополнен!');
                window.location.href = "http://213/139/208.110:5173/me"; 
            })
            .catch(error => {
                console.error('Error updating balance:', error);
                alert('Произошла ошибка при пополнении баланса.');
            });
        }
    };

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit} className="form-inline">
                <div className="input-group mb-3">
                    <label htmlFor="amountInput" className="form-label sr-only">Сумма</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amountInput"
                        placeholder="Пополнить баланс"
                        value={amount}
                        onChange={handleInputChange}
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>
                <div className="col mb-3">
                    <button type="submit" className="btn btn-success">
                        <span>+</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BalanceTopUp;
