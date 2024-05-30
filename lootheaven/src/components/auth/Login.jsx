import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Login = () => {
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1 align='center' style={{color: '#fff', paddingTop: '1em'}}>Упс, вам сюда нельзя...</h1>
            <h3 align='center' style={{color: '#fff', paddingTop: '1em', paddingBottom: '1em'}}>Попробуйте авторизоваться, возможно это поможет!</h3>
                                    <a href="http://147.45.246.193:8082/oauth2/authorization/discord" style={{borderRadius: '10px', padding: '1em', background: '#5865F2', color: '#fff', alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faDiscord} style={{ fontSize: '50px', color: 'white'}} />
                                    </a>
                                    <img src='https://i.pinimg.com/originals/cf/ac/ca/cfaccabe8e2b93601f42199d2bb0c36d.png' style={{width: '50%', paddingTop: '5em'}}></img>
        </div>
    )
    
}
