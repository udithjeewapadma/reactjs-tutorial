
function Main({name,age,campus,city,image}){
    return(
        <>
            <img src={image?`${image}` :
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s`}
            alt="dog" />

            <div className="details">
                <h3>{name}</h3>
                <p>
                    <span>{age}</span>
                    <span>{campus}</span>
                    <span>{city}</span>
                </p>
            </div>
        </>
    )
}

export default Main;