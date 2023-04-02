import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Stack, Typography } from "@mui/material";
import { buildEtherscanAddresslink, smallerString } from "../../utils/helpers";

const CollectionHeader = () => {
  const contract = {
    id: "0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad",
    name: "Dario De Siena - Giving Back",
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {contract.name}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={{ xs: 1, sm: 3 }}
        flexWrap="wrap"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography sx={{ fontSize: 14 }}>
            {smallerString(contract.id)}
          </Typography>
          <ContentCopyIcon sx={{ fontSize: 16 }} />
        </Stack>

        <a
          href={buildEtherscanAddresslink(_id)}
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
              View on Etherscan
            </Typography>
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </Stack>
        </a>
      </Stack>
    </Box>
  );
};

export default CollectionHeader;
