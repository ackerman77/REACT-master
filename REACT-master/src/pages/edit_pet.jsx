import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Edits from "../components/edit";
import Cards from "../components/carts";


const Edit_Pet = () => {
  let card1={name:'Редактирование объявления'}

    return (
<div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Edits/>
      </main>
      <Footer/>
</div>
  );
};

export default Edit_Pet;