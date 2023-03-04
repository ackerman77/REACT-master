import React, { useReducer, useRef, useState } from "react";

const Regist = () => {
    let input=useRef(0)
    const [user_reg,setUser_reg] = useState();
    //console.log(user_reg)

    function reg(e) {
        e.preventDefault();
        //'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementById('form')

        // Loop over them and prevent submission
    
        if (!forms.checkValidity()) {
            // e.preventDefault()
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }
    
        console.log(user_reg)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        let raw = JSON.stringify(user_reg);
    
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if ('data' in result) {
                    document.getElementById('success').style.display = 'block'
                    document.getElementById('error').style.display = 'none'
                    
                } else {
                    document.getElementById('error').style.display = 'block'
                    document.getElementById('success').style.display = 'none'

                }
            }
            )
    
    }





    return (
<div>
    <div className="p-3">
    <form className="w-50 m-auto border p-3 needs-validation" style={{'minWidth':'300px;'}} onSubmit={reg} noValidate id='form'>
        <div className="mb-3">
            <label for="validationCustom01" className="form-label">Введите имя:</label>
            <input type="text" className="form-control" id="validationCustom01" required onChange={(e)=>setUser_reg({...user_reg, name:e.target.value})}/>
            <div className="invalid-feedback">Пожалуйста, введите имя</div>
            </div>

        <div className="mb-3">
            <label for="validationCustom02" className="form-label">Введите свой телефон:</label>
            <input type="tel" className="form-control" id="validationCustom02" required onChange={(e)=>setUser_reg({...user_reg, phone:e.target.value})}/>
            <div className="invalid-feedback">Пожалуйста, введите телефон</div>
        </div>

        <div className="mb-3">
            <label for="validationCustom03" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" id="validationCustom03" required onChange={(e)=>setUser_reg({...user_reg, email:e.target.value})}/>
            <div className="invalid-feedback">Пожалуйста, введите почту</div>
        </div>

        <div className="mb-3">
            <label for="validationCustom04" className="form-label">Введите пароль:</label>
            <input type="password" className="form-control" id="validationCustom04" ref={input} required onChange={(e)=>setUser_reg({...user_reg, password:e.target.value})}/>
            <div className="invalid-feedback">Пожалуйста, введите пароль</div>
        </div>

        <div className="mb-3">
            <label for="validationCustom05" className="form-label">Повторите пароль:</label>
            <input type="password" className="form-control" id="validationCustom05" pattern={input.current.value} required onChange={(e)=>setUser_reg({...user_reg, confirm_password:e.target.value})}/>
            <div className="invalid-feedback">Пожалуйста, повторите пароль</div>


            <div className="form-text"></div>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="invalidCheck" required onChange={(e)=>setUser_reg({...user_reg, check:e.target.value})}/>
            <label className="form-check-label" for="invalidCheck">Согласие на обработку персональных данных</label>
            <div className="invalid-feedback">Вы должны принять перед отправкой</div>
        </div>

        <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
    </form>

    <p className='text-danger text-center' id='error' style={{ display: 'none' }}>Неправилный адрес электронной почты и e-mail</p>
    <p className='text-success text-center' id='success' style={{ display: 'none' }}>Вы успешно зарегистрировались</p>


    </div>
</div>

    );
};

export default Regist;