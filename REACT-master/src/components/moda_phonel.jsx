import React, { useState } from "react";

const Mod = () => {
    const [phone,setPhone] = useState();

    function patchphone(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.token);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "phone": phone
        });
        
        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://pets.сделай.site/api/users/phone", requestOptions)
          .then(response => response.json())
          .then(result => {
            if('data' in result){
                window.location.reload()
            }
            else{
        document.getElementById('ers').style.display = "block"
    }
            console.log(result)
        })
          .catch(error => console.log('error', error));
    }




    console.log(phone)

    return (
<div>
<div className="p-3">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Изменить телефон
    </button>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-body">
            


                <form>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Введите номер телефона</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" onChange={(e)=>setPhone(e.target.value)}/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                        <p className="w-100 text-danger" id="ers" style={{'display':'none'}}>Телефон введен неверно</p>
                    </div>
                </form>

            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary" onClick={()=>patchphone()}>Изменить телефон</button>
            </div>
        </div>
        </div>
    </div>
</div>
</div>
    );
};

export default Mod;