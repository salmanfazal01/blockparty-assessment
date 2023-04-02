import { Box, Card, Typography, styled } from "@mui/material";
import NFTDetailsDialog from "../../modals/NFTDetailsDialog";
import { useState } from "react";
import { TokenProps } from "../../../pages/HomePage";

interface IdBadgeProps {
  tokenID: string;
}

interface TokenNameProps {
  name: string;
}

const StyledImage = styled("img")(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "all .4s ease",
}));

// Imo it's an overkill to create a separate component for idbadge and tokenname
// but it depends on the practice a company uses.
const IdBadge: React.FC<IdBadgeProps> = ({ tokenID }) => (
  <Box
    sx={{
      zIndex: 999,
      bgcolor: "rgba(21, 21, 21, 0.7)",
      position: "absolute",
      top: 0,
      left: 0,
      p: "9px",
      borderWidth: "0px 1px 1px 0px",
      borderColor: "rgba(241, 241, 236, 0.5)",
      borderStyle: "solid",
      borderRadius: "4px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography sx={{ fontSize: 12 }}>#{tokenID}</Typography>
  </Box>
);

const TokenName: React.FC<TokenNameProps> = ({ name }) => (
  <Box
    sx={(theme) => ({
      bgcolor: "rgba(21, 21, 21, 0.7)",
      position: "absolute",
      bottom: theme.spacing(2),
      left: theme.spacing(2),
      right: theme.spacing(2),
      border: "1px solid rgba(241, 241, 236, 0.5)",
      borderRadius: 1,
    })}
  >
    <Typography sx={{ p: 2, fontSize: 12, fontWeight: 700 }}>{name}</Typography>
  </Box>
);

const NFTCard: React.FC<TokenProps> = ({ tokenID, image, name }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        sx={{
          cursor: "pointer",
          height: 262,
          // width: 262,
          width: "100%",
          border: "1px solid rgba(241, 241, 236, 0.5)",
          borderRadius: 2,
          position: "relative",
          transition: "all .4s ease",
          "&:hover": {
            "& img": {
              transform: "scale(1.1)",
            },
          },
        }}
      >
        {/* ID */}
        <IdBadge tokenID={tokenID} />

        {/* Image */}
        <StyledImage src={image.url} alt="Alt text" loading="lazy" />

        {/* Token Name */}
        <TokenName name={name} />
      </Card>

      {/* Dialog */}
      {open && (
        <NFTDetailsDialog open={open} handleClose={handleClose} id={tokenID} />
      )}
    </>
  );
};

export default NFTCard;
