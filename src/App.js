import './App.css';
import Main from './Components/Main';
import { myData } from './Data/myData';

// const NewBlock = () =>{
// return(
//   <Fragment>
//   {myData?.map(({name,age,campus,city,id})=>{
//     return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
//   })};
//   </Fragment>
// )
// }
function App() {

  const mainBlock = myData.map(({name,age,campus,city,id,image})=>{
    return <p><Main key={id} name={name} age={age} campus={campus} city={city} image={image} /></p>
  });

  return (
    <div className='main-container'>

    <p>Udith Jeewapadma</p>

    {/* {myData.map(({name,age,campus,city,id})=>{
      return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
    })} */}

    <div className='mainblock-container'>
      {mainBlock}
    </div>
    

    {/* <NewBlock /> */}

    </div>
  );
}

export default App;
