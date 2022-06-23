import CloseIcon from "@mui/icons-material/Close"
import { IconButton } from "@mui/material"
import { ComponentProps, FC } from "react"

type Props = ComponentProps<typeof IconButton>

export const CloseIconButton: FC<Props> = ({ ...props }) => (
  <IconButton {...props} aria-label="close" component="button">
    <CloseIcon />
  </IconButton>
)
