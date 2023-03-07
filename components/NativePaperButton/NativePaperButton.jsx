import React from "react"
import { StyleSheet } from "react-native";
import { Button, MD3Colors } from "react-native-paper"

export const NativePaperButton = (args) => {
  const {variant:mode,color}=args;
  const size = args.size||'small';
  const children = args.children ||'Name';
  const textColor=mode === 'outlined'||mode==='text'? color : 'none';
  const buttonColor=mode === 'outlined'|| mode==='text'? 'none' : color; 
  console.log(args);
  return (
   <Button 
   style={styles[size]}
   textColor={MD3Colors[textColor+'50']}
   buttonColor={MD3Colors[buttonColor+'50']}
   {...{...args,mode,children}}
   >
   </Button>
  )
}

const styles = StyleSheet.create({
  small:{
    width:100,
    padding:2.5,
  },
  medium:{
    width:150,
    padding:3,
  },
  large:{
    width:200,
    padding:4.5,
  },
 
})

  
