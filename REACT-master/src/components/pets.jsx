import React from "react";

const Pet = (props) => {
    let domain = 'https://pets.сделай.site';
    let img=[props.pet.photos1!=null ? <img src={domain+props.pet.photos1} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'',
    props.pet.photos2!=null ? <img src={domain+props.pet.photos2} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'',
    props.pet.photos3!=null ?<img src={domain+props.pet.photos3}  className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'']
    return (
<div>
        <div className="d-flex flex-row flex-wrap border  border-primary m-auto  p-3 position-relative w-50" style={{'minWidth':'300px'}}>
           <div className="d-flex flex-row flex-wrap justify-content-around border border">
               {img}
           </div>

           <p className="w-100 text-danger" id="err" style={{'display':'none'}}>Животное не найдено</p>
            
            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.pet.id}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Имя:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.pet.name}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Телефон:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.pet.phone}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>E-mail:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.pet.email}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Вид животного:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.pet.kind}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Описание:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.pet.description}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Номер чипа:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.pet.mark}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Район:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.pet.district}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.pet.date}</p>

        </div>
        <br/>
</div>

    );
};

export default Pet;