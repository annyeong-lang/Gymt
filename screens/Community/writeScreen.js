import {
    VStack,
    Input,Center,
    Button,HStack,
    FormControl,
    NativeBaseProvider,Select,Text
  } from 'native-base';
  import React ,{useState,useEffect}from 'react';
  import Inputs from "./inputss"
  
  export default function WritingScreen({navigation})
  {
    const obj={
      sports :"",
      location :"",
      id:"",
      date :"",
      title :"",
      contents:""
    }
    let time;
    var check=false;
  
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
  
  
    const submit =()=>{
      return(navigation.navigate("wh"))
    }
    
    return(
      <NativeBaseProvider>
      <Inputs data={obj}
              handle={handle}
              handleSelects={handleSelects}
             submit={submit}
                />
        </NativeBaseProvider>
    )
    
  }