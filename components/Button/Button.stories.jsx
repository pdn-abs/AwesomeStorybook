
import React from "react"
import { MyButton } from "./Button"

const MyButtonMeta = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" }
  },
  args: {
    text: "Hello world"
  }
}

export default MyButtonMeta

export const Basic = (args) => <MyButton {...args} />