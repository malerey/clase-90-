const Tarjeta = ({ title, price, free, id}) => {


  return (
    <article>
    <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>Envio gratuito: {free ? "Si" : "No"}</h4>
    </article>
  )
}

export default Tarjeta
