import { Card as MuiCard } from "@mui/material"
import { ComponentProps, FC } from "react"

export const Card: FC<ComponentProps<typeof MuiCard>> = ({ ...props }) => (
  <MuiCard raised {...props} />
)
