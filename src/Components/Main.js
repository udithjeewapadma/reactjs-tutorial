function Main({children,name,age,campus,city}){

    // const name = "Udith Jeewapadma";
    // const age = "24 years";
    // const campus = "SLIIT";

    // const myObj = {
    //     name : `${name}`,
    //     age: `${age}`,
    //     campus: `${campus}`,
    //     city: "Gampaha"
    // }

    // const {city} = myObj;
    return(
        <div>
            This is main component

            <ul>
                <li>{name}</li>
                <li>{age} </li>
                <li>{campus}</li>
                <li>{city}</li>

            </ul>
            {children}
        </div>
    )
}

export default Main;