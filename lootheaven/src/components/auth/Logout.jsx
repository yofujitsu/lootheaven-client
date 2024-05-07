export const Logout = () => {
    fetch('http://79.174.82.223:8082/logout', { method: 'POST', credentials: 'include' })
        .then(() => {
            window.location.href = "/home"; 
            window.location.reload;
        })
        .catch(error => console.error('Error logging out:', error));
};
