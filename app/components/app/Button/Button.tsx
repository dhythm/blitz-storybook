import { Button as ButtonCore } from "app/components/core"
import { ComponentProps, FC } from "react"

export const Button: FC<ComponentProps<typeof ButtonCore>> = ({ ...props }) => (
  <ButtonCore variant="contained" size="medium" {...props} />
)
