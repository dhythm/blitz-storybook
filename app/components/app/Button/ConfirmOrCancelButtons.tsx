import { Box } from "@mui/material"
import { Button } from "app/components/core"
import { FC } from "react"

type Props = {
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmOrCancelButtons: FC<Props> = ({ onConfirm, onCancel }) => (
  <Box display={"flex"} flexDirection={"row"} columnGap={1}>
    <Box flex={1}>
      <Button color="inherit" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
    <Box flex={1}>
      <Button color="primary" onClick={onConfirm}>
        Confirm
      </Button>
    </Box>
  </Box>
)
