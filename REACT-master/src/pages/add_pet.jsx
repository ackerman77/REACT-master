import React from 'react'
import Footer from "../components/footer";
import Add from "../components/add";
import Header from '../components/header';
import Cards from "../components/carts";

function Adds() {
  let card1={name:'Добавление нового объявления'}

  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Add/>
      </main>
      <Footer/>
    </div>
  )
}

export default Adds