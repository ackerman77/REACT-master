import React, { useState } from "react";

const Mod = () => {
 const [email,setEmail] = useState();
  


function patchemail(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "email": email
    });
    
    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://pets.сделай.site/api/users/email", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(!result.error){
            window.location.reload()
        }
else{
    document.getElementById('er').style.display = "block"
}
        console.log(result)
    })
      .catch(error => console.log('error', error));
}






    return (
<div>
<div className="p-3">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Изменить почту
    </button>
    
    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-body">
            
                <form style={{'minWidth':'300px'}}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                        <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        <p className="w-100 text-danger" id="er" style={{'display':'none'}}>Почта введена неверно</p>

                    </div>
                </form>



            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary" onClick={()=>patchemail()}>Сохранить</button>
            </div>
        </div>
        </div>
    </div>
</div>
</div>
    );
};

export default Mod;