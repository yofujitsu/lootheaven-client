export const Logout = () => {
    fetch('http://213.139.208.110:8082/logout', { method: 'POST', credentials: 'include', mode: 'no-cors', headers: {
        'Access-Control-Allow-Origin': '*',
    }, })
        .then(() => {
            window.location.href = "/home"; 
            window.location.reload;
        })
        .catch(error => console.error('Error logging out:', error));
};
