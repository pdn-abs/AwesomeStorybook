import React from "react"
import { Button } from "react-native-paper"

export const NativePaperButton = (args) => {
  console.log(args);
  return (
   <Button {...{...args}}
   >
   </Button>
  )
}

