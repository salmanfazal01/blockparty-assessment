import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { format, compareAsc } from "date-fns";

interface DialogProps {
  open: boolean;
  handleClose: () => void;
}

interface TokenProps {
  tokenID: string;
  name: string;
  description: string;
  createdAt: string;
  createdBlock: number;
  image: {
    url: string;
  };
}

const NFTDetailsDialog = ({ open, handleClose }: DialogProps) => {
  const token = {
    tokenID: "3",
    name: "Dream Big - by Dario De Siena",
    createdAt: "2023-03-17T19:56:59Z",
    createdBlock: 16849745,
    description: "",
    image: {
      url: "https://arweave.net/AS_DZjWS6N_yZvptGcvfX9eJ9J1Y-ZYY0pm120KlahA",
    },
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <DialogTitle>{token.name}</DialogTitle>

      <DialogContent>
        <img
          src={token.image.url}
          alt={token.name}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 500,
            objectFit: "contain",
          }}
        />

        <Stack sx={{ mt: 2 }} spacing={1}>
          <Typography>ID: {token.tokenID}</Typography>

          <Typography>
            Created At: {format(new Date(token.createdAt), "PPpp")}
          </Typography>

          <Typography>Block: {token.createdBlock}</Typography>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NFTDetailsDialog;
