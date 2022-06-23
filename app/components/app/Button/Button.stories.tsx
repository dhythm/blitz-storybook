import { ComponentStory, Meta } from "@storybook/react"
import React from "react"
import { ConfirmOrCancelButtons } from "./ConfirmOrCancelButtons"

export default {
  title: "Components/App/Buttons",
} as Meta

const Template: ComponentStory<typeof ConfirmOrCancelButtons> = (args) => (
  <ConfirmOrCancelButtons
    onConfirm={() => console.log("onConfirm")}
    onCancel={() => console.log("onCancel")}
  />
)

export const $ConfirmOrCancelButtons = Template.bind({})
