import React from 'react'
import Footer from "../components/footer";
import Searchs from "../components/search";
import Header from '../components/header';
import Cards from "../components/carts";


function Search() {
  let card1={name:'Поиск по объявлениям'}

  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Searchs/>
      </main>
      <Footer/>
    </div>
  )
}

export default Search