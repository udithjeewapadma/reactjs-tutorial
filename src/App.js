import "./App.css"
import {useState} from "react"
import Unit from "./Components/Unit"

const App = () =>{

  // const [imageUrl,setImageUrl] = useState('')
  // const [name,setName] = useState('')
  // const [age,setAge] = useState('')
  // const [campus,setCampus] = useState('')
  // const [city,setCity] = useState('')

  //use single state to set values
  const [inputData,setInputData] = useState({
    imageUrl: "",
    name: "",
    age:"",
    campus:"",
    city:""

  })

  const [myData,setMyData] = useState([])

return(
  <div className="main_container">
    <div className="main_left">

      <input type="text" value={inputData.imageUrl} placeholder="Enter imageUrl" onChange={(e) => {
        e.preventDefault()
        setInputData(preInputDate=>({
          ...preInputDate,
          imageUrl:e.target.value
        }))
      }}/>

      <input type="text" value={inputData.name} placeholder="Enter name" onChange={(e) => {
        e.preventDefault()
        setInputData(preInputDate=>({
          ...preInputDate,
          name:e.target.value
        }))
      }}/>

      <input type="text" value={inputData.age} placeholder="Enter age" onChange={(e) => {
        e.preventDefault()
        setInputData(preInputDate=>({
          ...preInputDate,
          age:e.target.value
        }))
      }}/>

      <input type="text" value={inputData.campus} placeholder="Enter campus" onChange={(e) => {
        e.preventDefault()
        setInputData(preInputDate=>({
          ...preInputDate,
          campus:e.target.value
        }))
      }}/>

      <input type="text" value={inputData.city} placeholder="Enter city" onChange={(e) => {
        e.preventDefault()
        setInputData(preInputDate=>({
          ...preInputDate,
          city:e.target.value
        }))
      }}/>

      <button onClick={() => 
      {
        setMyData(pre=>{
          return [...pre,{
            image: inputData.imageUrl,
            name:inputData.name,
            age:inputData.age,
            campus:inputData.campus,
            city:inputData.city
          }]
        })

        setInputData((pre) => {
          if(pre.imageUrl.length>0){
            return {
              ...pre,
              imageUrl:'',
            };
          }else{
            return pre;
          }
        });

        setInputData((pre) => {
          if(pre.name.length>0){
            return {
              ...pre,
              name:''
            };
          }else{
            return pre;
          }
        });

        setInputData((pre) => {
          if(pre.age.length>0){
            return {
              ...pre,
              age:''
            };
          }else{
            return pre;
          }
        });
        
        setInputData((pre) => {
          if(pre.campus.length>0){
            return {
              ...pre,
              campus:''
            };
          }else{
            return pre;
          }
        });
        
        setInputData((pre) => {
          if(pre.city.length>0){
            return {
              ...pre,
              city:''
            };
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