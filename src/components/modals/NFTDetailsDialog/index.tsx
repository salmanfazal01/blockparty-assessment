import { useQuery } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { format } from "date-fns";
import { GET_NFT } from "../../../GraphQL/Queries";

interface DialogProps {
  id: string;
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

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  maxHeight: 500,
  objectFit: "contain",
}));

const NFTDetailsDialog = ({ open, handleClose, id }: DialogProps) => {
  const { loading, error, data } = useQuery(GET_NFT(id));

  if (loading)
    return (
      <Dialog open>
        <Typography sx={{ p: 2 }}>Loading ...</Typography>
      </Dialog>
    );

  const token: TokenProps = data.token || {};

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <DialogTitle>{token.name}</DialogTitle>

      <DialogContent>
        <StyledImage src={token.image.url} alt={token.name} />

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
