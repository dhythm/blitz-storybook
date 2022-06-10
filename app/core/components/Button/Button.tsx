import { Button as MuiButton } from "@mui/material"
import { ComponentProps, FC } from "react"

export const Button: FC<ComponentProps<typeof MuiButton>> = ({ ...props }) => (
  <MuiButton variant="contained" size="medium" {...props} />
)
