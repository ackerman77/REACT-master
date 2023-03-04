import React, { useState } from "react";





const Authentication = () => {

    const [user,setUser] = useState();
//console.log(user);

    return (
<div>
    <div className="p-3">
        <form className="w-50 m-auto border p-3 needs-validation" style={{'minWidth':'300px;'}} noValidate id='form' onSubmit={aut}>

            <div className="m-3">
                <label for="validationCustom01" className="form-label">Введите адрес электронной почты</label>
                <input type="email" className="form-control" id="validationCustom01" required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                <div className="invalid-feedback">Пожалуйста, введите адрес электронной почты</div>
            </div>

            <div className="m-3">
                <label for="validationCustom02" className="form-label">Введите пароль:</label>
                <input type="password" className="form-control" id="validationCustom02" required onChange={(e)=>setUser({...user, password:e.target.value})}/>
                <div className="invalid-feedback">Пожалуйста, введите пароль</div>
            </div>

            <input type="submit" className="btn btn-primary m-3" value="Войти"/>
        </form>
        
    </div>
</div>


    );
};

export default Authentication;