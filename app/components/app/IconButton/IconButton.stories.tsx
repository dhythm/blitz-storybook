import { ComponentStory, Meta } from "@storybook/react"
import React from "react"
import { CloseIconButton } from "./CloseIconButton"

export default {
  title: "Components/App/IconButton",
  argTypes: {},
} as Meta

const CloseIconButtonTemplate: ComponentStory<typeof CloseIconButton> = (args) => (
  <CloseIconButton {...args} />
)

export const $CloseIconButton = CloseIconButtonTemplate.bind({})
