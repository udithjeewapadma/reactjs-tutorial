import './App.css';
import Main from './Components/Main';
import { myData } from './Data/myData';
import {useState} from 'react'

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


const [inputVal,setInputVal] = useState(0)

const clickHandler = () =>{
  setTimeout(() => {
    console.log("clicked")
    setInputVal((pre) => {
      if(pre<1){
        return pre + 1
      }else if(pre<2){
        return pre +3
      }else{
        return pre +2
      }
    })
  },2000)
}
console.log(inputVal)

  const mainBlock = myData.map(({name,age,campus,city,id,image}, index)=>{
    return <p><Main key={id + index} name={name} age={age} campus={campus} city={city} image={image} /></p>
  });

  const inputHandler = (event,data) =>{
    event.preventDefault()
    console.log(data)
    setInputVal(event.target.value)
  }

  return (
    <div className='main-container'>

      <div>
        <h1>
          {inputVal}
        </h1>
      </div>

    <p>Udith Jeewapadma</p>

    {/* {myData.map(({name,age,campus,city,id})=>{
      return <p><Main key={id} name={name} age={age} campus={campus} city={city} /></p>
    })} */}

    <div className='mainblock-container'>
      {mainBlock}
    </div>

    <br></br >
    <button style={
      {
        fontSize:'12px',
        border:'1px solid red',
        padding:'7px 12px'
      }
    }
    onClick={clickHandler}
    >Click me</button>
    

    {/* <NewBlock /> */}

    <br /> <br/>
    <input style={{
      border : "1px solid purple",
      fontSize: "14px",
      padding: "7px"
    }} 
    type='text'
    placeholder='type anything'

    onChange={(e) => {
      inputHandler(e, inputVal)
    }}
     />

    </div>
  );
}

export default App;
