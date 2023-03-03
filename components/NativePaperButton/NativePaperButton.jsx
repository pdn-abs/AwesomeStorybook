import React from "react"
import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper"

export const NativePaperButton = (args) => {
  const {variant:mode}=args;
  const size = args.size||'small';
  const children = args.children ||'Name';
  console.log(args);
  return (
   <Button style={styles[size]} {...{...args,mode,children}}
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

  
