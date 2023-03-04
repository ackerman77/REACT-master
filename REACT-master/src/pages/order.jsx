import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Orders from "../components/orders";
import Cards from "../components/carts";
import cat from '../img/pets/кошка.jpg';
import goap from '../img/pets/коза.jpeg';

const Order = () => {
  //let [pet1, setPet1]=useState({id:'', kind:'', description:'', photos:'', mark:'', district:'', date:''})
  let pet1={id:14, kind:'Кошка', photos:cat, description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'ca-001-spb', district: 'Василиостровский', date: '24-03-2020' }
  let pet2={id:18, kind:'Коза', photos:goap, description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022'}
  let card1={name:'Результаты поиска'}
    return (
<div>
      <main style={{'minHeight':'85vh' }}>
      <Header/>
      <Cards card={card1}/>
      <Orders pet={pet1}/>
      <Orders pet={pet2}/>
      </main>
      <Footer/>
</div>
  );
};

export default Order;