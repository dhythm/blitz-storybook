import { Typography } from "@mui/material"
import { ComponentStory, Meta } from "@storybook/react"
import React from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { LogoutDialog } from "./LogoutDialog"
import { SimpleDialog } from "./SimpleDialog"

export default {
  title: "Components/App/Dialog",
} as Meta

const LogoutDialogTemplate: ComponentStory<typeof LogoutDialog> = (args) => (
  <LogoutDialog
    open
    title={args.title}
    onClose={() => console.log("onClose is clicked")}
    onSubmit={() => console.log("onSubmit is clicked")}
  />
)
export const $LogoutDialog = LogoutDialogTemplate.bind({})
$LogoutDialog.args = {
  title: "Title",
}

const ConfirmationDialogTemplate: ComponentStory<typeof ConfirmationDialog> = (args) => (
  <ConfirmationDialog
    open
    title={args.title}
    contents={args.contents}
    onConfirm={() => console.log("onConfirm is clicked")}
    onCancel={() => console.log("onCancel is clicked")}
  />
)
export const $ConfirmationDialog = ConfirmationDialogTemplate.bind({})
$ConfirmationDialog.args = {
  title: "Title",
  contents: <Typography>Are you sure to confirm?</Typography>,
}

const SimpleDialogTemplate: ComponentStory<typeof SimpleDialog> = (args) => (
  <SimpleDialog
    open
    title={args.title}
    contents={args.contents}
    onClose={() => console.log("onCancel is clicked")}
  />
)
export const $SimpleDialog = SimpleDialogTemplate.bind({})
$SimpleDialog.args = {
  title: "Title",
  contents: <Typography>This is SimpleDialog</Typography>,
}
