import React, { useState } from 'react';

function BalanceTopUp() {
    const [amount, setAmount] = useState('');

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (window.confirm("Вы точно хотите пополнить баланс?")) {
            fetch(`http://localhost:8082/users/balance?amount=${amount}`, {
                method: 'PATCH',
                credentials: 'include', // Убедитесь, что cookies и другие учетные данные отправляются с запросом, если это необходимо
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount }) // Если ваш API ожидает JSON в теле запроса
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert('Баланс успешно пополнен!');
            })
            .catch(error => {
                console.error('Error updating balance:', error);
                alert('Произошла ошибка при пополнении баланса.');
            });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Пополнение баланса</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="amountInput" className="form-label">Введите сумму для пополнения:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amountInput"
                        value={amount}
                        onChange={handleInputChange}
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Пополнить баланс</button>
            </form>
        </div>
    );
}

export default BalanceTopUp;
