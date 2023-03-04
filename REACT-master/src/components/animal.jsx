import React from 'react';
import { Link } from "react-router-dom";


const Animal = (props) => {
    return (
<div>
    <div className="d-flex flex-row flex-wrap">
        <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative" style={{'minWidth':'300px', 'width':'45%'}}>
        <img src={props.pet.photos} className="w-75" alt="рисунок животного"/>
            <p className="w-50 text-primary" style={{'minWidth':'250px;'}}>id:</p>
            <p className="w-50" style={{'minWidth':'250px;'}}>{props.pet.id}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px;'}}>Вид животного:</p>
            <p className="w-50" style={{'minWidth':'250px;'}}>{props.pet.kind}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px;'}}>Описание:</p>
            <p className="w-50" style={{'minWidth':'300px;'}}>{props.pet.description}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px;'}}>Номер чипа:</p>
            <p className="w-50" style={{'minWidth':'300px;'}}>{props.pet.mark}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px;'}}>Район:</p>
            <p className="w-50" style={{'minWidth':'300px;'}}>{props.pet.district}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px;'}}>Дата:</p>
            <p className="w-50" style={{'minWidth':'300px;'}}>{props.pet.date}</p>
            <Link to={'/pets/id'}><button type="submit" className="btn btn-primary">Подробнее</button></Link>
        </div>
    </div>
</div>
    )
}
export default Animal;