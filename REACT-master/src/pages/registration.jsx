import React from 'react'
import Footer from "../components/footer";
import Registration from "../components/regist";
import Header from '../components/header';
import Cards from "../components/carts";


function Registr() {
  let card1={name:'Регистрация'}

  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Registration/>
      </main>
      <Footer/>
    </div>
  )
}

export default Registr