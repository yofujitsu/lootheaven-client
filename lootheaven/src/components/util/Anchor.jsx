import React from 'react'
import { Navigate } from 'react-router-dom'


export function Anchor() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1 align="center" style={{color:'#fff', paddingTop: '1em'}}>Ошибка доступа</h1>
            <h3 align="center" style={{color:'#fff', paddingTop: '1em', paddingBottom: '1em'}}>Упс, вы зашли куда-то не туда...</h3>
            <a className='btn btn-outline-light' href='/home' style={{width: '30%'}}>Вернуться на главную</a>
            <img style={{width: '50%', marginTop: '50%'}} src='https://i.stack.imgur.com/jmpYg.png?s=328&g=1'></img>
        </div>
        
    )
}
