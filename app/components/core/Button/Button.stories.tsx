import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

export default {
  title: "Components/Core/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Component: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Component.bind({})
Default.args = {
  children: "Button",
  disabled: false,
  fullWidth: false,
}