

function Cars(props) {
    const cars = props.cars
    console.log(cars)
  return (
    <section>
        <img src={cars[0].imgUrl} alt={cars[0].title} />
        <h2>{cars[0].title}</h2>
        <p>{cars[0].description}</p>
    </section>
  )
}

export default Cars

