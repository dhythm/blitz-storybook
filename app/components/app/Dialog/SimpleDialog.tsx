import CloseIcon from "@mui/icons-material/Close"
import { Dialog, DialogTitle, Grid, IconButton } from "@mui/material"
import { ComponentProps, FC, ReactNode } from "react"

type Props = { title?: string; contents?: ReactNode; onClose?: () => void } & ComponentProps<
  typeof Dialog
>

export const SimpleDialog: FC<Props> = ({ title, contents, onClose, open, ...dialogProps }) => (
  <Dialog maxWidth="md" onClose={onClose} open={open} {...dialogProps}>
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
      {contents && (
        <Grid item xs={12}>
          {contents}
        </Grid>
      )}
    </Grid>
  </Dialog>
)
