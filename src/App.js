import "./App.css"
import {useState} from "react"
import Unit from "./Components/Unit"

const App = () =>{

  const [imageUrl,setImageUrl] = useState('')
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [campus,setCampus] = useState('')
  const [city,setCity] = useState('')

  const [myData,setMyData] = useState([])

return(
  <div className="main_container">
    <div className="main_left">
      <input type="text" value={imageUrl} onChange={(e) => {
        e.preventDefault()
        setImageUrl(e.target.value)
      }}/>
      <input type="text" value={name} onChange={(e) => {
        e.preventDefault()
        setName(e.target.value)
      }}/>
      <input type="text" value={age} onChange={(e) => {
        e.preventDefault()
        setAge(e.target.value)
      }}/>
      <input type="text" value={campus} onChange={(e) => {
        e.preventDefault()
        setCampus(e.target.value)
      }}/>
      <input type="text" value={city} onChange={(e) => {
        e.preventDefault()
        setCity(e.target.value)
      }}/>
      <button onClick={() => 
      {
        setMyData(pre=>{
          return [...pre,{
            image: imageUrl,
            name,
            age,
            campus,
            city
          }]
        })

        setImageUrl((pre) => {
          if(pre.length>0){
            return "";
          }else{
            return pre;
          }
        });

        setName((pre) => {
          if(pre.length>0){
            return "";
          }else{
            return pre;
          }
        });

        setAge((pre) => {
          if(pre.length>0){
            return "";
          }else{
            return pre;
          }
        });
        
        setCampus((pre) => {
          if(pre.length>0){
            return "";
          }else{
            return pre;
          }
        });
        
        setCity((pre) => {
          if(pre.length>0){
            return "";
          }else{
            return pre;
          }
        });

      }
      }>Submit</button>
    </div>
    <div className="main_right">
      {myData?.map(({image,name,age,campus,city},index) =>
      <Unit image={image} name={name} age={age} campus={campus} city={city} key={index}/>
      )}
    </div>
  </div>
)
}

export default App;