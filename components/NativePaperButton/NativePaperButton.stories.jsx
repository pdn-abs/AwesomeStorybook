import React from "react"
import { NativePaperButton } from "./NativePaperButton"

const NativePaperButtonMeta = {
  title: "NativePaperButton",
  component: NativePaperButton,
  argTypes: {
   /*Mode of the button. You can change the mode to adjust the styling to give it desired emphasis. */
    variant:{
      control:{
        type:'select',
        options:['contained','outlined','text','contained-tonal','elevated']
      },
    },
    color:{
      control:{
        type:'select',
        options:['primary','secondary','tertiary','neutral','error','none']
      },
    },
    onPress: { action: "pressed the button" },

  },
  args: {
    variant:"contained",
    dark:true,
    icon:"camera",
    contentStyle:{flexDirection: 'row-reverse'},
    compact:true,
    loading:false,
    disabled:false,
    uppercase:true,    
     // labelStyle:,
    // theme:,
    // testID:,
  //   children: 'HI',
	// variant: 'contained',
	// size: 'large',
	// color: 'success',
	// disabled: false,
	// disableElevation: true,
	// startIcon: 'Delete',
	// fullWidth: false,
	// href: 'https://mui.com/material-ui/react-button/',
	// disableFocusRipple: true,
	// disableRipple: false,
	// sx: { border: '10px solid black' },
  }
}

export default NativePaperButtonMeta

export const Template = (args) => <NativePaperButton {...args} />

