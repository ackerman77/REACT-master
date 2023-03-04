import Main from "./pages/main";
import AddPet from "./pages/add_pet";
import Auth from "./pages/auth";
import Edits from "./pages/edit_pet";

import Order from "./pages/order";
import Pet from "./pages/pet";

import Profile from "./pages/profile";
import Regist from "./pages/registration";
import Search from "./pages/search";

import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={'/add_pet'} element={<AddPet/>}/>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path={'/edit_pet'} element={<Edits/>}/>
      <Route path={'/order'} element={<Order/>}/>
      <Route path={'/pets/:id'} element={<Pet/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/registration'} element={<Regist/>}/>
      <Route path={'/search'} element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
