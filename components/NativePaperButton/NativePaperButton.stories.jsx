import React from "react"
import { NativePaperButton } from "./NativePaperButton"

const NativePaperButtonMeta = {
  title: "NativePaperButton",
  component: NativePaperButton,
  argTypes: {
   /*Mode of the button. You can change the mode to adjust the styling to give it desired emphasis. */
    mode:{
      control:{
        type:'select',
        options:['contained','outlined','text','contained-tonal','elevated']
      },
    },
    /*Whether the color is a dark color. A dark button will render light text and vice-versa. 
    Only applicable for:contained, contained-tonal and elevated. */
    dark: {
      options: [true, false],
      control: { type: 'radio' },
    },
    /*Use a compact look, useful for text buttons in a row. */
    compact: {
      options: [true, false],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    uppercase: {
      options: [true, false],
      control: { type: 'radio' },
    },
    onPress: { action: "pressed the button" },
    onLongPress:{},
  },
  args: {
    buttonColor:"blue",
    textColor:"white",
    icon:"camera",
    children:"Hello world",
    accessibilityLabel:"button",
    accessibilityHint:"button",
    delayLongPress:4000,
    // contentStyle:,
    // style:,
    // labelStyle:,
    // theme:,
    // testID:,
  }
}

export default NativePaperButtonMeta

export const Template = (args) => <NativePaperButton {...args} />

