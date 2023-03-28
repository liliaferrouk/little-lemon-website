import React from 'react'
import CardMenu from './CardMenu'
import greekSalad from "../assets/Salad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: bruschetta,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    img: bruschetta,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
];

function Specials() {
  const specialsCards = specialsData.map((item) => {
    return (
      <CardMenu
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <div className='specials'>
      <div className='specials-h2-button'>
      <h2>Specials</h2>
      <button>Online Menu</button>
      </div>
      <div className='specials-3best'>
          {specialsCards}
      </div>
    </div>
  )
}

export default Specials