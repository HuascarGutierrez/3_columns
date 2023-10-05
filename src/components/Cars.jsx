import React from 'react'
import {cars} from '../assets/carsAPI'
import '../styles/cars.css'
function Cars(props) {

return (
  <section>
  {cars.map((car) => (
    <div id={car.theme}>
      <img src={car.imgUrl} alt={car.title} />
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <button id={car.theme+'Button'}>Learn More</button>
    </div>
  ))}
</section>
);
}
export default Cars;