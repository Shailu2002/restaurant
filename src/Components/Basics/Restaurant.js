import React, { useState } from 'react';
import Menu from './Menuapi.js';
import MenuCard from './MenuCard.js';
import './Style.css';

const Restaurant = () => {
  const [menudata, setmenudata] = useState(Menu);//data ko manage karne ke liye initail value se intialize
  
  const filterelement = (category) => {
    const updatelist = Menu.filter((element) => {
      return element.category === category;

    })
    setmenudata(updatelist);
  }
  return (
     <>
           <div class="navbar">
        <nav class="navbar navbar-expand-sm ">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button className="btn-b " onClick={()=>filterelement("Breakfast")}>Breakfast</button>
               </li>
            <li class="nav-item">
            <button className="btn-b " onClick={()=>filterelement("Lunch")}>Lunch</button>
          
              </li>
            <li class="nav-item">
            <button className="btn-b " onClick={()=>filterelement("Evening")}>Evening Snacks</button>
             
            </li>
            <li class="nav-item">
            <button className="btn-b " onClick={()=>filterelement("Dinner")}>Dinner</button>
            
            </li>
            <li class="nav-item">
            <button className=" btn-b" onClick={()=>filterelement("Dessert")}>Dessert</button>
              
            
            </li>
            <li class="nav-item">
            <button className="btn-b " onClick={()=>setmenudata(Menu)}>All</button>
          
            </li>
             </ul>
            </nav>
         </div>
        
    
      <MenuCard menudata={menudata} />

   </>   
  )
}

export default Restaurant;