import React from 'react';
import useUser from '../../hooks/useUser';
import BalanceTopUp from '../util/BalanceTopUp';

function UserProfile({ userId }) {
    const { user, loading, error } = useUser(userId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;
    if (!user) return <div>No user data available.</div>;

    const addBalance = (amount) => {
        fetch(`http://localhost:8082/users/balance?${amount}`, { method: 'POST', credentials: 'include' })
        .then(() => {
            window.alert(`Вы успешно пополнили баланс на ${amount} коинов!`)
        })
        .catch(error => console.error('Error logging out:', error));
    }

    return (
        <div style={{display: 'flex', margin: '1em', alignItems: 'center', flexDirection: 'column', color: '#fff'}}>
            <h1>User Profile</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>balance: {user.balance} 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin-yuan" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em">
                        <path d="M0 0h24v24H0z" stroke="none"/>
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M9 13h6M9 8l3 4.5M15 8l-3 4.5V17"/>
                    </svg>
            </p>
            <BalanceTopUp/>
        </div>
    );
}

export default UserProfile;
