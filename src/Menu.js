import React from 'react';

const Menu = ({title, price, img, desc}) => {
   return <article className="menu-item">
       <img src={img} alt={title} className="item-image"/>
       <div className="item-info">
           <header className="item-heading">
               <h4>{title}</h4>
               <p>{price} Rs</p>
           </header>
           <p className="item-text">{desc}</p>
       </div>
   </article>
}

export default Menu;
