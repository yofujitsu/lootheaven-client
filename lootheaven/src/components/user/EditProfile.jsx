import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap'; // Убедитесь, что установили `react-bootstrap`

function EditProfile() {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = { username, avatar };
        fetch('http://147.45.246.193:8082/users/edit/me', {
            method: 'PATCH',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
//                 'Access-Control-Allow-Origin': 'http://147.45.246.193:5173',
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                alert('Профиль успешно обновлен!');
            } else {
                alert('Произошла ошибка при обновлении профиля.');
            }
        });
    };

    return (
        <div>
            <button
                className="btn btn-success"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Редактировать профиль
            </button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">Имя пользователя</label>
                            <input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="avatarInput" className="form-label">Ссылка на аватар</label>
                            <input
                                type="text"
                                className="form-control"
                                id="avatarInput"
                                value={avatar}
                                onChange={handleAvatarChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Подтвердить изменения</button>
                    </form>
                </div>
            </Collapse>
        </div>
    );
}

export default EditProfile;
