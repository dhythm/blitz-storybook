import { Dialog, DialogTitle, Grid } from "@mui/material"
import { CloseIconButton, ConfirmOrCancelButtons } from "app/components/app"
import { ComponentProps, FC, ReactNode } from "react"

type Props = { title?: string; contents?: ReactNode } & Pick<
  ComponentProps<typeof Dialog>,
  "open"
> &
  Pick<ComponentProps<typeof ConfirmOrCancelButtons>, "onCancel" | "onConfirm">

export const ConfirmationDialog: FC<Props> = ({ title, contents, open, onCancel, onConfirm }) => (
  <Dialog maxWidth="md" onClose={onCancel} open={open}>
    <DialogTitle>
      {title}
      {onCancel ? (
        <CloseIconButton sx={{ position: "absolute", right: 8, top: 8 }} onClick={onCancel} />
      ) : null}
    </DialogTitle>
    <Grid container paddingX={3} paddingBottom={3} spacing={2}>
      {contents && (
        <Grid item xs={12}>
          {contents}
        </Grid>
      )}
      <Grid item xs={12}>
        <ConfirmOrCancelButtons onCancel={onCancel} onConfirm={onConfirm} />
      </Grid>
    </Grid>
  </Dialog>
)
