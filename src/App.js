import './App.css';
import Main from './Components/Main';
import { myData } from './Data/myData';

const NewBlock = () =>{
return(
  <>
  {myData?.map(({name,age,campus,city,id})=>{
    return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
  })};
  </>
)
}
function App() {

  // const mainBlock = myData.map(({name,age,campus,city,id})=>{
  //   return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
  // });

  return (
    <>
    <div>My name
      <h1>Udith</h1>
      <h1>Jeewapadma</h1>
    </div>

    <p>Udith Jeewapadma</p>

    {/* {myData.map(({name,age,campus,city,id})=>{
      return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
    })} */}

    {/* {mainBlock} */}

    <NewBlock />

    </>
  );
}

export default App;
