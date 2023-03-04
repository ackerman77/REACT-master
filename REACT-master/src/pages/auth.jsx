import React, { useState } from "react";
import Footer from "../components/footer";
//import Au from "../components/authentication";
import Header from "../components/header";
import Cards from "../components/carts";

function Auth() {
  let card1={name:'Аутентификация'}
  const [user,setUser] = useState();
  let [token, setToken] = useState();



  function auth(e) {
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

    console.log(user)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(user);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if ('data' in result) {
                localStorage.token = result.data.token
                setToken(result.data.token)
                //history('/profile')
                document.getElementById('success').style.display = 'block'
                document.getElementById('error').style.display = 'none'
            } else {
                document.getElementById('error').style.display = 'block'
                document.getElementById('success').style.display = 'none'
                document.getElementById('validationCustom02').value = ''
            }
        }
        )

}


  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
        <Header/>
        <Cards card={card1}/>
        <div className="p-3">
                        <form className="w-50 g-3 m-auto border p-3 needs-validation" style={{ minWidth: "300px" }} onSubmit={auth} noValidate id='form'>

                            <div className="m-3">
                                <label for="validationCustom01" className="form-label">e-mail</label>
                                <input type="email" className="form-control" id="validationCustom01" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                <div className="invalid-feedback">
                                    Пожалуйста, введите адрес электронной почты
                                </div>
                            </div>
                            <div className="m-3">
                                <label for="validationCustom02" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="validationCustom02" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                <div className="invalid-feedback">
                                    Пожалуйста, введите пароль
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary m-3" value="Войти" />
                        </form>
                        <p className='text-danger text-center' id='error' style={{ display: 'none' }}>Неправилный адрес электронной почты и e-mail</p>
                        <p className='text-success text-center' id='success' style={{ display: 'none' }}>Вы успешно зарегистрировались, ваш токен: {token}</p>
                        <p className='text-center'>e-mail: user@user.ru; Пароль: paSSword1</p>
                    </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Auth

