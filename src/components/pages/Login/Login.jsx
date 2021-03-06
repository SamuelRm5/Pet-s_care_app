import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import image from './perro_gato_animado.png'
import { pets_images } from '../../../helpers/Pets_care_images'

import './LoginStyle.css'

export const Login = () => {
  return (
    <div className="loginContainer">
        <div className="login_cont_iz">
            <img src={image} alt="" />
            <img id='eslogan' src={ pets_images("./login/eslogan.png")} alt="" />
            {/* <p><b>¡</b> Sé la persona que tu perro cree que eres <b>!</b></p> */}
        </div>
        <div className='login_cont_dr'>
            <ImagenUI 

                img={pets_images("./login/title.png")}
            />
            <div className="loginData">
                <p>Iniciar sesión en Pet's Care</p>
                <InputUI 
                    type='email'
                    style = 'inputLogin'
                    txt = 'Correo electrónico'
                />
                <InputUI 
                    type='password'
                    style = 'inputLogin'
                    txt = 'Contraseña'
                />
                <ButtonUI 
                    style='btnLogin'
                    text='Iniciar sesión'
                />
                <div className='hr'>
                    <hr />
                    o
                    <hr />
                </div>
                <Link to="/registro"className='enlaceBtn'>
                    <ButtonUI 
                        style='btnLoginCrear'
                        text='Crear cuenta nueva'
                    />
                </Link>
                
            </div>
        </div>
        
    </div>
  )
}
