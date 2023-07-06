import React from 'react';
import './Style.css';

const MenuCard = ({ menudata }) => {
  

  //console.log(menudata);
  return (
    <>
      {
        menudata.map((element) => { 
          return (
            <>
              <div class="container ">
                <div class="card">
                  <div class="card-header">
                    <span class="circle-b">{element.id}</span>
                    
                    <h6 class="cat">{ element.category}</h6>
                    <h1>{element.name}</h1>
                  </div>
                  <div class="card-body">
                    <p>{element.description}</p>
                    <img src={element.image} alt="images" />
                    <h5>Price-{element.price}</h5>
                  </div>
                  <div class="card-footer">
                    <button class="order" onClick={() => { alert("Thank You! for ordering Food 😊")}} type="submit" >Order Now</button>
                  </div>
                </div>
              </div>

            </>
          )
          
        })
      }
          
  



      </>
  )
}

export default MenuCard;