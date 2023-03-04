import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Animal from "../components/animal";
import Podpiska from "../components/podpiska";
import Cards from "../components/carts";

import cat from '../img/pets/кошка.jpg';
import goap from '../img/pets/коза.jpeg';




const Main = () => {
  let pet1={id:14, kind:'Кошка', photos:cat, description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'ca-001-spb', district: 'Василиостровский', date: '24-03-2020' }
  let pet2={id:18, kind:'Коза', photos:goap, description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022'}
  
  let card1={name:'Найденные животные'}
  let card2={name:'Карточки найденных животных'}
  let card3={name:'Подписка на новости'}
  


return (
<div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Slider/>
      <Cards card={card2}/>
      <div className="d-flex flex-row">
      <Animal pet={pet1}/>
      <Animal pet={pet2}/>
      </div>
      <Cards card={card3}/>
      <Podpiska/>
      </main>
      <Footer/>
</div>
  );
};

export default Main;