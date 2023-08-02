import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function PromptModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        B1 - View Prompt
      </Button>
      {/* link button to modal for challenge prompt */}
      {/* link button to submission modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${props.title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${props.description}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Got it!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
