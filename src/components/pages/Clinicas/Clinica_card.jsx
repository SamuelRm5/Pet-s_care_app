import React from 'react'
import { Link } from "react-router-dom";
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import {IoLocationOutline} from "react-icons/io5"
import {AiOutlineDollarCircle} from "react-icons/ai"
import {FaRegCalendarPlus} from "react-icons/fa"

export const Clinica_card = ( {
    id,
    img,
    nombre,
    direccion,
    tarifa,
    horario
} ) => {


    return (
        <>
            <div className="card__cli">
                {
                    (img === "")
                    ? <img src="https://thumbs.dreamstime.com/b/ejemplo-de-color-plano-exterior-la-cl%C3%ADnica-veterinaria-hospital-veterinario-en-paisaje-urbano-edificio-c%C3%B3modo-con-el-letrero-141242172.jpg" alt="" />
                    : <img src={img} alt={id} />
                }
                <h1> {nombre} </h1>
                <h2> <span><IoLocationOutline /></span> {direccion} </h2>
                <hr className='hr__clinicas'/>
                <h3> <span><AiOutlineDollarCircle /></span> Desde <b>${tarifa}</b> </h3>
                {
                    horario.map( day => (
                        <p key={id}> 
                            Lunes {day.Lunes}<br />
                            Sabado {day.Sabado}<br />
                            ...
                        </p>
                    ))
                }
                <div className='buttons_clinicas'>
                    <Link to={`/clinica/${id}`} style={{width:"38%",height:"35px"}}>
                        <ButtonUI 
                            text={"Ver más"}
                            style={"btnVermas mt-3"}
                        />
                    </Link>
                    
                    <ButtonUI 
                        text={<FaRegCalendarPlus />}
                        style={"btnCalendar mt-3"}
                    />
                </div>
                
                
            </div>

        </>
    )
}
