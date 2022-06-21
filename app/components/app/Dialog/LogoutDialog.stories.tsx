import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LogoutDialog } from "./LogoutDialog"

export default {
  title: "Components/App/Dialog",
  component: LogoutDialog,
  argTypes: {},
} as ComponentMeta<typeof LogoutDialog>

const Component: ComponentStory<typeof LogoutDialog> = (args) => <LogoutDialog {...args} open />

export const Default = Component.bind({})
Default.args = {
  title: "Title",
  onCancel: () => console.log("onCancel is clicked"),
  onSubmit: () => console.log("onSubmit is clicked"),
}
