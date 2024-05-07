import useUserMe from '../../hooks/useUserMe';
import BalanceTopUp from '../util/BalanceTopUp';
import LootsList from '../catalog/LootsList';
import Orders  from '../order/Orders';
import EditProfile from './EditProfile';


function UserProfile() {
    const { user, loading, error } = useUserMe();

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки данных.</div>;
    if (!user) return <div>Не найдено данных пользователя.</div>;

    if (!user.active) {
        return <div style={{color: '#fff', textAlign: 'center', marginTop: '2em'}}>
            Вы забанены по причине нарушений правил сайта. Свяжитесь с администрацией чтобы получить разбан.
        </div>;
    }

    return (
        <div style={{display: 'flex', marginTop: '1em', alignItems: 'center', flexDirection: 'column', color: '#fff'}}>
            <div className='user-profile-container' style={{display: 'flex', flexDirection: 'column', color: '#fff', alignItems: 'flex-end', padding: '1em', border: '2px solid #5865F2', borderRadius: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', color: '#fff'}}>
                    <div className='row'>
                    <img style={{borderRadius: '50%', width: '150px'}} src={user.avatar}></img>
                    <div className='row mt-3'>
                            <h5><b>email: {user.email}</b></h5>
                            <h5><b>Количество сделок: {user.dealsCount}</b></h5>
                            <h5><b>Количество покупок: {user.ordersCount}</b></h5>
                            <EditProfile/>
                    </div> 
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <h3 align='center'>Привет, {user.username}! Давно не виделись!</h3>
                        <div className='col d-flex justify-content-around align-items-center'>
                            {user.role === 'ADMIN' && (
                            <a className="btn btn-success" href='/admin'>Панель администратора</a>
                            )}    
                            <a className='btn btn-success' href='/me/add' style={{width: '30%'}}>Создать товар</a>
                            <BalanceTopUp/>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div style={{width: '70%'}}>
                <h3 align='center' style={{marginTop: '1em'}}>Ваши товары</h3>
                <LootsList endpointSuffix={'my'}/>
            </div>
            
            <div style={{width: '70%',display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h3 align='center' style={{marginTop: '1em'}}>Ваши сделки</h3>
                <Orders endpointSuffix={'my'}/>
            </div>
            <img src='https://avatanplus.com/files/resources/original/5676945294663151bf3362b0.png' style={{ width: '40%', marginTop: '2em'}}></img>
            
        </div>
    );
}



export default UserProfile;
