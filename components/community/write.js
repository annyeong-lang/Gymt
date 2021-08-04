
  import React ,{useState,useEffect}from 'react';
  import Inputs from "./format"
  
  export default function Wow()
  {
    const obj={
      sports :"",
      location :"",
      id:"",
      date :"",
      title :"",
      contents:""
    }
   
  
    const [sports,setSports]=useState("");
    const [location,setLocation]=useState("");
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    const [contents,setContents]=useState("");
   
    const handleSelects=(label,value)=>{
     
      if(label==="종목"){
       setSports(value);
       obj.sports=value;
     } 
     else{
       setLocation(value);
       obj.location=value;
     }
    }
    const handle=(event)=>{
      switch(event.target.name){
        case "titleInput" :{
          setTitle(event.target.value);
          obj.title=event.target.value;
          break;
        }
        case "contentsInput" :{
          setContents(event.targetvalue);
          obj.contents=event.target.value;
          break;
        }
        case "idInput" :{
          setId(event.targetvalue);
          obj.id=event.target.value;
          break;
        }
      }
    }
   
 
    return(
  
      <Inputs data={obj}
              handle={handle}
              handleSelect={handleSelects}
              submit={submit}
               />
    )
     
  }