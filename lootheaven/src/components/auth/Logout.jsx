export const Logout = () => {
<<<<<<< HEAD
    fetch('http://147.45.246.193:8082/logout', { method: 'POST', credentials: 'include' })
=======
    fetch('http://213.139.208.110:8082/logout', { method: 'POST', credentials: 'include', mode: 'no-cors', headers: {
        'Access-Control-Allow-Origin': '*',
    }, })
>>>>>>> 5f3819e3411c4d60ec65ecc451617797c5583724
        .then(() => {
            window.location.href = "/home"; 
            window.location.reload;
        })
        .catch(error => console.error('Error logging out:', error));
};
