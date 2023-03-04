import React, { useEffect, useState } from 'react'
import Footer from "../components/footer";
import Prof from "../components/prof";
import Dobav from '../components/dobav';
//import Pagination from '../components/pagination';
import Header from '../components/header';
import Cards from "../components/carts";
import Modal1 from "../components/moda_phonel"
import Modal from "../components/modal_email"

import { Link } from "react-router-dom";
//import { useParams } from 'react-router-dom';

//import cat from '../img/pets/кошка.jpg';
//import goap from '../img/pets/коза.jpeg';



function Profile() {
  let card1={name:'Личный кабинет'}
  let card2={name:'Добавленные объявления'}
  let card3={name:'Изменить данные'}

  let [profil, setProfil]=useState({id:'', phone:'', email:'', name:'', registrationDate:'', countPets:'', countOrder:''})
  useEffect(()=>getprof(), [])
   
  //let token = 'xdcXQ6GcwdTB1iZGImQaHGXievBJfCTZ5o1aZlI2FPWpCkuveCM5m9O9Utzbj4lNO9zs6e0VKtkqT3j8'
  //let profil1={id:14, phone:'+7-911-456-78-78', email:'leonid@yandex.ru', name:'Леонид', registrationDate:'26-06-2015', petsCount:2, ordersCount:4}
  let [orders, setOrders]=useState({data:{orders:[]}})
  useEffect(()=>getpets(), [])
  //let pet1={id:14, kind:'Кошка', photos:cat, description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'ca-001-spb', district: 'Василиостровский', date: '24-03-2020' }
  //let pet2={id:18, kind:'Коза', photos:goap, description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022'}

  function getprof(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders};

  fetch("https://pets.сделай.site/api/users", requestOptions)
    .then(response => response.json())
    .then(result => {
      setProfil(result)
      console.log(result)
    })
    .catch(error => console.log('error', error));

  }




  function getpets(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
  };
  fetch("https://pets.сделай.site/api/users/orders", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)

        setOrders(result)
        

    })
    .catch(error => console.log('error', error));

  }
  let cards=orders.data.orders.map((order, index)=>{return <Dobav order={order} key={index+'cards'}/>})



  let [page, setPage]=useState(cards.slice(0,5))
        
  let j=1
  let list=[];

  for (let index = 0; index < cards.length; index+=5) {  
    let l=(j-1)*5   
    let m=j*5  
     list.push(<li className="page-item" key={j+'list'}><Link to={'#'} className="page-link" onClick={()=>setPage(cards.slice(l, m))}>{j}</Link></li>)        
     j++
 }


  return (
    <div>
      <main style={{'minHeight':'85vh'}}>
      <Header/>
      <Cards card={card1}/>
      <Prof prof={profil}/>
      <Cards card={card3}/>
      <Modal/>
      <Modal1/>
      <Cards card={card2}/>

      <div>
      <p className='text-center'>{page}</p> 
      <nav aria-label="Page navigation example" className="m-3">
    <ul className="pagination">
        <li className="page-item">
            <Link to={'#'} className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </Link>
        </li>
{list}
        <li className="page-item">
            <Link to={'#'} className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </Link>
        </li>
    </ul>
    </nav>
      </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile