import React from "react"
import {
  Select,
  HStack, Center  
} from "native-base"
//item :종목,위치

export default function Selects({label,item,arr,handle}){
 
  return (
    <HStack alignItems="center" space={2} >
        <Center ml={-1} width={10}>{label}</Center>
        <Select
          value={item}
          width="40%"
          minWidth={20}
          placeholder=""
          onChange={(itemValue)=>handle(label,itemValue)}
          mt={1}
        >{arr.map((cur)=>(
          <Select.Item label={cur} value={cur} />
        ))}
         </Select>
           </HStack>
  )
}