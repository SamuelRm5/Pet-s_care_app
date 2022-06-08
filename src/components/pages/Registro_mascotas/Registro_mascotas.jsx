import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb';
import { FaInfoCircle } from 'react-icons/fa';
import './Registro_mascotas.css'
import imagePerro from './img/perro.png'
import imageGato from './img/gato.png'
import imageLupa from './img/lupa.png'
import imageLoro from './img/loro.png'
import imageOtro from './img/varios.png'
import titulo from './img/titulo.png'




export const Registro_mascotas = () => {

    const [type_pet, setType_pet] = useState(imageLupa)
    const [gender, setGender] = useState("")

    const handlePet = ( {target} ) => {

        if ( target.value === "perro" ) {
            setType_pet( imagePerro );
        }
        else if ( target.value === "gato" ) {
            setType_pet( imageGato )
        } else if ( target.value === "loro") {
            setType_pet( imageLoro )
        } else if ( target.value === "otro") {
            setType_pet( imageOtro )
        } else {
            setType_pet( imageLupa )
        }
        
    }

    const handleGenderPet = ( {target} ) => {

        if ( target.value === "macho" ) {
            setGender( "macho" );
        }
        else if ( target.value === "hembra" ) {
            setGender( "hembra" );
        }
        else {
            setGender( "undefined" );
        }

    }

    const handleFcInfo = () => {
        console.log("ENTRA");
        const recomendacion = document.getElementById('recomendacion_registro_mascotas');
        const fcInfo = document.getElementById('FcInfo');

        fcInfo.classList.add('deshabilitar')

        
        recomendacion.classList.remove('animate__backOutRight');
        recomendacion.classList.remove('ocultarElemento');
        recomendacion.classList.add('animate__fadeInRight');
        recomendacion.classList.add('mostrar_elemento');

        setTimeout( () => {
            
            recomendacion.classList.remove('animate__fadeInRight');
            recomendacion.classList.add('animate__backOutRight');
        }, 9470);
        setTimeout( () => {

            recomendacion.classList.remove('mostrar_elemento');
            recomendacion.classList.add('ocultarElemento');
            fcInfo.classList.remove('deshabilitar');
        }, 10000);


    }

    return (
        <div className="loginContainer animate__animated animate__fadeIn">
            <div className="login_cont_iz animate__animated animate__fadeInLeftBig">
                <img id='type_animal' src={type_pet} alt="" />
            </div>
            <div className='login_cont_dr'>
                <img src={titulo} className='img_registro_mascotas' />
                <div className="loginData registro_mascota">
                    <p><b>¡</b> Registra tu mascota <b>!</b></p>
                    <div className='div_registro_mascotas_select'>
                        <p id='p_registro_mascotas'>Tipo</p>
                        <select onChange={ handlePet } name="type" id="select_type">
                            <option id="option_disabled">Selecciona el tipo de mascota</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="loro">Ave</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    
                    <InputUI 
                        type='text'
                        style = 'inputLogin'
                        txt = 'Nombre mascota'
                    />
                    <div className="div_registro_mascotas_input">
                        <InputUI 
                            type='text'
                            style = 'inputLogin'
                            txt = 'ID '
                        />
                        <p id='recomendacion_registro_mascotas' className='ocultar_elemento animate__animated'>
                            <b>sugerencia:</b> el ID de tu mascota podría ser tu documento y el nombre de tu mascota. ej.18xxxxfirulais
                        </p>
                        <div>
                            <a onClick={handleFcInfo} id="FcInfo"><FaInfoCircle /></a>
                        </div>
                        
                    </div>
                    <div className='div_registro_mascotas_input'>
                        <InputUI 
                            type='text'
                            style = 'inputLogin'
                            txt = 'Raza'
                        />
                        <InputUI 
                            type='text'
                            style = 'inputLogin'
                            txt = 'Color'
                        />

                    </div>
                    <div className='div_registro_mascotas_select'>
                        {
                            (gender === "macho")
                            ? <p id='p_registro_mascotas'>Sexo <span id='genderMale'><TbGenderMale /></span></p>
                            : ( gender === "hembra") 
                            ? <p id='p_registro_mascotas'>Sexo <span id='genderFemale'><TbGenderFemale /></span></p>
                            : <p id='p_registro_mascotas'>Sexo</p>
                        }
                        
                        <select onChange={ handleGenderPet } name="gender" id="select_gender">
                            <option id='option_disabled'>Selecciona el sexo</option>
                            <option value="macho">Macho</option>
                            <option value="hembra">Hembra</option>
                        </select>
                    </div>
                    <ButtonUI 
                        style='btnLogin'
                        text='Registrar'
                    />
                    <div className='hr'>
                        <hr />
                        o
                        <hr />
                    </div>
                    <Link to="/registro"className='enlaceBtn'>
                        <ButtonUI 
                            style='btnLoginCrear'
                            text='Cancelar'
                        />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}