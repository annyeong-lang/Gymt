import { NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Inputs from "./inputFormat"
  
export default function WritingScreen({navigation})
  {
    const [inputs,setInputs]=useState({
      sports :"",
      location: "",
      title: " ",
      id:"",
      contents:"",
      time:""
    })
    
    const onChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setInputs({
        [name]: value,
      });
    }
  
    const onSubmit =()=>{
      return(navigation.navigate("wh"))
    }
    
    return(
      <NativeBaseProvider>
         <ScrollView>
      <Inputs onChange={onChange}
              onSubmit={onSubmit}
              inputs={inputs}
                />
           </ScrollView> 
        </NativeBaseProvider>
    )
    
  }