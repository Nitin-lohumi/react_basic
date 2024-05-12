import { useState } from 'react'
import './App.css'
import F from './component/F'
import Page1 from './component/Page1'
import Page2 from './component/Page2'

function App() {
  const [count, setCount] = useState(0)
  const [arr,setArr]=useState([0]);
  const [set,isSet]= useState(false);
  const NOtSet=[0];
  const students = [  
    {  
      'id': 1,   
      'name': 'Jack',   
      'email': 'jack@gmail.com'  
    },  
    {  
      'id': 2,   
      'name': 'Mary',   
      'email': 'mary@gmail.com'  
    },  

    {  
      'id': 3,   
      'name': 'John',   
      'email': 'john@gmail.com'  
    },  
];  

function click(){
  setCount(count=>count+1);
  if(count%2==0){
    isSet(true);
  }
  else{
    isSet(false);
  }

  if(set){
    setArr(
      ()=>{
       return(
        <Page1 students={students} loop={loop}/>
       )
      }
  ); 
  }
  else{
    setArr(
      ()=>{
       return(
      <>
      <Page2 NOtSet={NOtSet} notsetloop={notsetloop} />
      </>
       )
      }
  ); 
  }
  
}  
function loop(students) {
 return(
  <>
     <tr>
      <td>{students.id}</td>
      <td>{students.name}</td>
      <td>{students.email}</td>
     </tr>
  </>
 );
}
function notsetloop(NOtSet,item){
   return("this value is  not set yet please click the button to set this ")
}
return (
    <>
       <F
       c={count}
       onClick={click}
       array={arr}
       isSet={isSet}
       />
       <h1>
        {set}
       </h1>
    </>
  )
}

export default App
