import React, { useState }  from "react";
import css from '../css/add.css';


const Add = () => {

    const [new_pet,setNew_pet] = useState();
    //console.log(new_pet);

    return (
<div>
<link rel="stylesheet" href={css}/>
    <div className="p-3">
        <form className="w-50 m-auto border border-primary p-3 was-validated" style={{'minWidth':'300px;'}}>

            <div className="mb-3">
                <label for="name" className="form-label">Введите ваше имя</label>
                <input type="text" className="form-control" id="name" required onChange={(e)=>setNew_pet({...new_pet, name:e.target.value})}/>
                <div  className="form-text">Используйте кириллические буквы.</div>
            </div>

            <div className="mb-3">
                <label for="phone" className="form-label">Введите свой телефон:</label>
                <input type="text" className="form-control" id="phone" required onChange={(e)=>setNew_pet({...new_pet, phone:e.target.value})}/>
                <div  className="form-text">Используйте цифры, +, -.</div>
            </div>

            <div className="mb-3">
                <label for="email" className="form-label">Введите адрес электронной почты</label>
                <input type="email" className="form-control" id="email" required onChange={(e)=>setNew_pet({...new_pet, email:e.target.value})}/>
                <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
            </div>

            <div className="mb-3">
                <label for="kind" className="form-label">Введите вид животного:</label>
                <input type="text" className="form-control" id="kind" required onChange={(e)=>setNew_pet({...new_pet, kind:e.target.value})}/></div>

            <div className="mb-3 form-check border p-3">
                <input type="checkbox" className="form-check-input m-3" id="exampleCheck1"/>
                <label className="form-check-label m-3" for="exampleCheck1">Пройти автоматическую регистрацию</label>
                <label for="password" className="form-label hidden">Введите пароль:</label>
                <input type="password" className="form-control hidden" id="password"/>
                <div  className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква</div>
                <label for="confirm_password" className="form-label hidden">Повторите пароль пароль:</label>
                <input type="password" className="form-control hidden" id="confirm_password"/>



            </div>

            <div className="mb-3 p-3 border">
                <label for="image1" className="form-label">Выберите файлы изображений:</label>
                <input type="file" className="form-control mb-3" id="image1" required onChange={(e)=>setNew_pet({...new_pet, image1:e.target.value})}/>
                <input type="file" className="form-control mb-3" id="image2" onChange={(e)=>setNew_pet({...new_pet, image2:e.target.value})}/>
                <input type="file" className="form-control mb-3" id="image3" onChange={(e)=>setNew_pet({...new_pet, image3:e.target.value})}/>
            </div>

            <div className="mb-3">
                <label for="chip" className="form-label">Электронный чип:</label>
                <input type="text" className="form-control" id="chip" required onChange={(e)=>setNew_pet({...new_pet, chip:e.target.value})}/></div>

            <div className="mb-3">
                <label for="description" className="form-label">Описание:</label>
                <textarea className="form-control" id="description" required onChange={(e)=>setNew_pet({...new_pet, description:e.target.value})}></textarea></div>

            <div className="mb-3 form-check p-3">
                <input type="checkbox" className="form-check-input" id="check1" required/>
                <label className="form-check-label" for="check1">Подтвердить согласие на обработку персональных данных</label>
            </div>

            <input type="submit" className="btn btn-primary" value="Зарегистрировать"/>
        </form>
    </div>
</div>

    );
};

export default Add;