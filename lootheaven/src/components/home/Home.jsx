import React from 'react'
import CatalogCard from '../catalog/CatalogCard'
import './Layout.css'
import { faDiscord, faGithub, faSpotify, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Home() {
    return (
        <div className='main-container'>
            <h1 style={{color: '#fff', margin: '1em 0 1em 0'}}>Игровые услуги</h1>
            <div className='cards-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <CatalogCard
                title="Dota 2"
                image={'https://clan.cloudflare.steamstatic.com/images/3703047/60586d77d8c2ddbddf805451c244309a7733e14e.png'}
                description="Crownfall уже в игре"
                link="/loots?game=dota2"
                
            />
            <CatalogCard
                title="World Of Warcraft"
                image={'https://www.techpowerup.com/img/c0H9S9TL4DGvUX8o.jpg'}
                description="Dragonflight уже в игре"
                link="/loots?game=wow"
                
            />
            <CatalogCard
                    title="Valorant"
                    image={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt46ddfc6450029d1e/65fcba815caa4b62ec60dbca/EP8_Act_2_Article_1920x1080_Clove.jpg'}
                    description="Radiant Points"
                    link="/loots?game=valorant"
                    
            />
            <CatalogCard
                title="CS 2"
                image={'https://sun1-23.userapi.com/impg/H_eFNe5jFaWfWJRYYEEdizDFczDZRKbzXXoPOA/TKRdeNVFnXs.jpg?size=1080x1080&quality=96&sign=fbe09816bcff50d802f24819cf5a26b9&c_uniq_tag=I90brpNyusR_O2-PNWhwgY5cqWKYcxsQuLztRnsKrco&type=album'}
                description="Prime Аккаунты по низким ценам"
                link="/loots?game=cs2"
                
            />
            <CatalogCard
                title="Genshin Impact"
                image={'https://files.vgtimes.ru/gallery/main/171129/1601320321_4312.jpeg'}
                description="Дешевые самоцветы и аккаунты"
                link="/loots?game=genshin"
                
            />
            <CatalogCard
                    title="Minecraft"
                    image={'https://www.minecraft.net/content/dam/games/minecraft/screenshots/MCV_TrickyTrials_editorial_1170x500.jpg.transform/minecraft-image-large/image.jpg'}
                    description="Лицензионные аккаунты Microsoft"
                    link="/loots?game=minecraft"
                    
            />
            <CatalogCard
                    title="Honkai: Star Rail"
                    image={'https://3dnews.ru/assets/external/illustrations/2023/03/24/1084002/0.jpg'}
                    description="Осколки звёзд"
                    link="/loots?game=starrail"
                    
            />
            <CatalogCard
                    title="Helldivers 2"
                    image={'https://i.playground.ru/p/0uSTk9VCXN_Mvb2Hp7_KDw.jpeg'}
                    description="Новая Экшен-РПГ"
                    link="/loots?game=helldivers"
                    
            />
            <CatalogCard
                    title="Roblox"
                    image={'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/roblox-2551077.jpg?tf=3840x'}
                    description="Robux"
                    link="/loots?game=roblox"
                    
            />
            <CatalogCard
                    title="Fortnite"
                    image={'https://cdn1.epicgames.com/offer/fn/25BR_S25_EGS_Launcher_Blade_2560x1440_2560x1440-ce7ec00a4a4e53bfe089a2afa1f03acb'}
                    description="V-баксы и аккаунты"
                    link="/loots?game=fortnite"
                    
            />
            </div>
            <h1 style={{color: '#fff', margin: '1em 0 1em 0'}}>Сервисы для приложений</h1>
            <div className='cards-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <CatalogCard
                title="Steam"
                image={'https://cybersport.metaratings.ru/storage/images/5a/11/5a11ad1580564da936f4cb506846d49c.jpg'}
                description="Покупай игры, недоступные в РФ"
                link="/loots?game=steam"
                
            />
            <CatalogCard
                title="Blizzard"
                image={'https://jolstatic.fr/vc/0/0/11/604/137003.jpg'}
                description="Аккаунты Blizzard"
                link="/loots?game=steamwallet"
                
            />
            <CatalogCard
                    title="Chat GPT"
                    image={'https://raw.githubusercontent.com/shanlior/ExplorationConsciousRL/master/data/logo.jpg'}
                    description="Аккаунты Chat Gpt 4 Plus"
                    link="/loots?game=gpt"
                    
            />
            <CatalogCard
                title="Spotify Premium"
                image={'https://i.pinimg.com/originals/0f/30/0d/0f300da5c3b0cce0718db1590342f6ee.jpg'}
                description="Аккаунты Spotify Premium"
                link="/loots?game=spotify"
                
            />
            <CatalogCard
                title="Discord"
                image={'https://img.ggsel.ru/4134963/original/AUTOxAUTO/p1_4134963_3d6763b0.webp'}
                description="Баннеры и Подписка Nitro"
                link="/loots?game=nitro"
                
            />
            </div>
            <div className='cards-container' style={{ display: 'grid', marginTop: '1em', filter: 'grayscale(100%)' }}>
                <CatalogCard
                        title="Дополняемся..."
                        image={'https://images3.alphacoders.com/108/1082089.jpg'}
                        description="Количество обслуживаемых сервисов будет пополняться со временем!"
                        link="/loots"
                        
                />
            </div>
            
            <div className='home-footer' style={{display: 'flex', justifyContent: 'center', paddingTop:'8em'}}>
                <img src='https://picfiles.alphacoders.com/382/382457.png' style={{ width: '40%'}}></img>
                <div className='col'>
                <h3 style={{color: '#fff', lineHeight: '1.5'}}>Мы ещё работаем над наполнением нашего сервиса. Если ты реселлер и готов продавать лицензированный контент на нашем сайте - пиши нам на почту!</h3>
                <h3 style={{color: '#fff', lineHeight: '1.5'}}>lootheavenresellers@gmail.com</h3>
                <div className='footer-icons d-flex'>
                    <a href="https://github.com/yofujitsu" target="_blank" rel="noopener noreferrer" className='mx-2' style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="https://t.me/yofujitsu" target="_blank" rel="noopener noreferrer" className='mx-2' style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faTelegram} size="xl" />
                    </a>
                    <a href="https://discord.gg/fSTxTGQz" target="_blank" rel="noopener noreferrer" className='mx-2' style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faDiscord} size="xl" />
                    </a>
                    <a href="https://sptfy.com/yofujitsu" target="_blank" rel="noopener noreferrer" className='mx-2' style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faSpotify} size="xl" />
                    </a>
                </div>
                </div>
                
            </div>
        </div>
        
    )
}
