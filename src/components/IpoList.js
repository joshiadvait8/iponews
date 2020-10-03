import React,{useEffect, useState} from 'react'
import NameCard from './NameCard'
import dataipo from "../data.json"
import { keys } from '@material-ui/core/styles/createBreakpoints'
function IpoList() {
  // const[name,setName]=useState([{
  //   name:"",image:"",date:"",price:"",description:"",details:{},timetable:{}
  // }]);
  //   useEffect(() => {
      
  //     Object.keys(dataipo).forEach(key=>{
  //       setName(name=>[...name,dataipo[key]])
  //       // console.log(name);
  //     })
  //   },[]);
    return (
        <div>
         {
           Object.keys(dataipo).map((k,v)=>{
             return(
            //  <h1>{dataipo[k].name}
               <NameCard
               name={dataipo[k].name}
               price={dataipo[k].price}
               date={dataipo[k].date}
               img={dataipo[k].image}
               k={k}
               />
             )
           })}
         
         </div>
    )
}

export default IpoList
// {
//   name.map(
//    (i)=>(
    
//     <NameCard
//     name={i}
//     price={i.price}
//     date={i.date}
//     img={i.image}
  
//   />  
//    )
//   )

// }