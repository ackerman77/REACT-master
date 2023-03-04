import React from "react";
import { Link } from "react-router-dom";


const Dobavlenie = (props) => {


    function deletepet(id){

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.token);
        
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders
        };
        
        fetch("https://pets.сделай.site/api/users/orders/"+id, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            window.location.reload()
          })
          .catch(error => console.log('error', error));
        }





    let domain = 'https://pets.сделай.site';
    let img=[props.order.photos1!=null ? <img src={domain+props.order.photos1} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'',
    props.order.photos2!=null ? <img src={domain+props.order.photos2} className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'',
    props.order.photos3!=null ?<img src={domain+props.order.photos3}  className="w-25 p-3" style={{'minWidth':'250px'}} alt="Изображения животного"/>:'']
    return (
<div>
        <div className="d-flex flex-row flex-wrap">
            <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative" style={{'minWidth':'300px', 'width':'45%'}}>
            <div>{img}</div>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.order.id}</p>

            <p className="w-50 text-primary" style={{'minWidth':'250px'}}>Вид животного:</p>
            <p className="w-50" style={{'minWidth':'250px'}}>{props.order.kind}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Описание:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.order.description}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Номер чипа:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.order.mark}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Район:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.order.district}</p>

            <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата:</p>
            <p className="w-50" style={{'minWidth':'300px'}}>{props.order.date}</p>
                <div className="position-absolute" style={{'top':'15px', 'right':'15px', 'cursor':'pointer'}} onClick={()=>deletepet(props.order.id)}>&#10060;</div>
                <Link to={'/edit_pet'}><button type="submit" className="btn btn-primary" >Редактировать объявление</button></Link>
            </div>
        </div>
</div>

    );
};

export default Dobavlenie;