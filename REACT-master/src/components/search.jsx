import React, { useState } from "react";
import { Link } from "react-router-dom";


const Searchs = () => {

    const [poisk,setPoisk] = useState();
    //console.log(poisk)

    return (
<div>
    <div className="p-3">
        <form className="w-50 m-auto border p-3" style={{'minWidth':'300px'}}>

            <div className="mb-3">
                <label for="district" className="form-label">Выберите район:</label>
                <select id="district" className="form-select" onChange={(e)=>setPoisk({...poisk, district:e.target.value})}>
                    <option>Приморский</option>
                    <option>Петроградский</option>
                    <option>Василиостровский</option>
                    <option>Центральный</option>
                    <option>Красногвардейский</option>
                    <option>Выборгский</option>
                    <option>Калининский</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="kind" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="kind" onChange={(e)=>setPoisk({...poisk, kind:e.target.value})}/>
            </div>
            <Link to={'/order'}><input type="submit" className="btn btn-primary" value={'Найти'}/></Link>
        </form>
    </div>
</div>

    );
};

export default Searchs;