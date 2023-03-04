import React from "react";

const Podpiska = () => {
    return (
<div>
    <form class="w-50 m-auto p-3" style={{'minWidth':'300px'}}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Введите адрес электронной почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
        <button type="submit" class="btn btn-primary">Подписаться</button>
    </form>
</div>

    )
}
export default Podpiska;