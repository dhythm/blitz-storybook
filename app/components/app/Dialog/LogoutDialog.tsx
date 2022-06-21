import { Dialog, DialogTitle, Grid, IconButton, Typography } from "@mui/material"
import { Button } from "app/components/core"
import { ComponentProps, FC } from "react"
import CloseIcon from "@mui/icons-material/Close"

type Props = { title?: string; onClose?: () => void; onSubmit?: () => void } & Pick<
  ComponentProps<typeof Dialog>,
  "open"
>
export const LogoutDialog: FC<Props> = ({ title, onClose, onSubmit, ...dialogProps }) => (
  <Dialog maxWidth="md" onClose={onClose} {...dialogProps}>
    <DialogTitle>
      {title}
      {onClose ? (
        <IconButton
          aria-label="close"
          component="button"
          sx={{ position: "absolute", right: 8, top: 8 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
    <Grid container paddingX={3} paddingBottom={3} spacing={2}>
      <Grid item xs={12}>
        <Typography>Are you sure to logout?</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={onClose}>Cancel</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={onSubmit}>Logout</Button>
      </Grid>
    </Grid>
  </Dialog>
)
