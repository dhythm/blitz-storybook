import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

export default {
  title: "Components/Core/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const $Button = Template.bind({})
$Button.args = {
  children: "Button",
  disabled: false,
  fullWidth: false,
}
