
const Unit = ({image,name,age,campus,city}) => {
  return (
    <div className="unit_container">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p><span>{age}</span></p>
        <p><span>{campus}</span></p>
        <p><span>{city}</span></p>
    </div>
  )
}

export default Unit