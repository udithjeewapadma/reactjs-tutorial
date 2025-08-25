import "./App.css"
import {useEffect, useState} from "react"

// const App = () =>{

//   // const [imageUrl,setImageUrl] = useState('')
//   // const [name,setName] = useState('')
//   // const [age,setAge] = useState('')
//   // const [campus,setCampus] = useState('')
//   // const [city,setCity] = useState('')

//   //use single state to set values
//   const [inputData,setInputData] = useState({
//     imageUrl: "",
//     name: "",
//     age:"",
//     campus:"",
//     city:""

//   })

//   const [myData,setMyData] = useState([]);

//   const [windowWidth,setWindowWidth] = useState(window.innerWidth)

//   const changeWindowWidth = () => {
//     setWindowWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', changeWindowWidth());
//     console.log("use effect..")

//     return () =>{
//       console.log("use effect cleanup fun")
//       window.removeEventListener('resize',changeWindowWidth)
//     }
//   },[inputData.name])

// return(
//   <Fragment>
//     <Header />
//   <div className="main_container">
//     <h1>{windowWidth}</h1>
//     <div className="main_left">

//       <input type="text" value={inputData.imageUrl} placeholder="Enter imageUrl" onChange={(e) => {
//         e.preventDefault()
//         setInputData(preInputDate=>({
//           ...preInputDate,
//           imageUrl:e.target.value
//         }))
//       }}/>

//       <input type="text" value={inputData.name} placeholder="Enter name" onChange={(e) => {
//         e.preventDefault()
//         setInputData(preInputDate=>({
//           ...preInputDate,
//           name:e.target.value
//         }))
//       }}/>

//       <input type="text" value={inputData.age} placeholder="Enter age" onChange={(e) => {
//         e.preventDefault()
//         setInputData(preInputDate=>({
//           ...preInputDate,
//           age:e.target.value
//         }))
//       }}/>

//       <input type="text" value={inputData.campus} placeholder="Enter campus" onChange={(e) => {
//         e.preventDefault()
//         setInputData(preInputDate=>({
//           ...preInputDate,
//           campus:e.target.value
//         }))
//       }}/>

//       <input type="text" value={inputData.city} placeholder="Enter city" onChange={(e) => {
//         e.preventDefault()
//         setInputData(preInputDate=>({
//           ...preInputDate,
//           city:e.target.value
//         }))
//       }}/>

//       <button onClick={() => 
//       {
//         setMyData(pre=>{
//           return [...pre,{
//             image: inputData.imageUrl,
//             name:inputData.name,
//             age:inputData.age,
//             campus:inputData.campus,
//             city:inputData.city
//           }]
//         })

//         setInputData((pre) => {
//           if(pre.imageUrl.length>0){
//             return {
//               ...pre,
//               imageUrl:'',
//             };
//           }else{
//             return pre;
//           }
//         });

//         setInputData((pre) => {
//           if(pre.name.length>0){
//             return {
//               ...pre,
//               name:''
//             };
//           }else{
//             return pre;
//           }
//         });

//         setInputData((pre) => {
//           if(pre.age.length>0){
//             return {
//               ...pre,
//               age:''
//             };
//           }else{
//             return pre;
//           }
//         });
        
//         setInputData((pre) => {
//           if(pre.campus.length>0){
//             return {
//               ...pre,
//               campus:''
//             };
//           }else{
//             return pre;
//           }
//         });
        
//         setInputData((pre) => {
//           if(pre.city.length>0){
//             return {
//               ...pre,
//               city:''
//             };
//           }else{
//             return pre;
//           }
//         });

//       }
//       }>Submit</button>
//     </div>
//     <div className="main_right">
//       {myData?.map(({image,name,age,campus,city},index) =>
//       <Unit image={image} name={name} age={age} campus={campus} city={city} key={index}/>
//       )}
//     </div>
//   </div>
//   </Fragment>
// )
// }

// export default App;

const App = () => {

  const [apiId,setApiId] = useState('1');
  const [data,setData] = useState({})
  const [search,setSearch] = useState(0);

  console.log(apiId)
  // console.log(data)

  useEffect(() =>{
    console.log("use effect running")

    const apiCall = async() =>{
      console.log("api call")
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`)
      const data = await res.json()

      if(data){
        setData(data)
      }
    }
    if(apiId.length>0 && Number(apiId)>0 && Number(apiId)<=100){
      console.log("use effect if condition")

      apiCall()
    }

    //cleanup function
    return () =>{
      console.log("clean up")
      apiCall()
    }
    // eslint-disable-next-line
  },[search])


  return(
    <div>
      <input type="text" value={apiId} onChange={(e) =>{
        setApiId(e.target.value)
      }} placeholder="enter id" />

      <button onClick={()=>setSearch(pre=>pre===0?1:0)}>
        search
      </button>

      {data&&(<div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>)}
    </div>
  )
}

export default App;