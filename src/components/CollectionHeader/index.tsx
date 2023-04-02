import { useQuery } from "@apollo/client";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Stack, Typography } from "@mui/material";
import { GET_COLLECTION } from "../../GraphQL/Queries";
import { buildEtherscanAddresslink, smallerString } from "../../utils/helpers";
import CopyToClipBoardButton from "../buttons/CopyToClipboardButton";

const CollectionHeader = () => {
  const { loading, error, data } = useQuery(GET_COLLECTION);

  const _id = data?.contract?.id || "";
  const _name = data?.contract?.name || "";

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {_name}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={{ xs: 1, sm: 3 }}
        flexWrap="wrap"
      >
        <CopyToClipBoardButton textToCopy={_id}>
          <Typography sx={{ fontSize: 14 }}>{smallerString(_id)}</Typography>
        </CopyToClipBoardButton>

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
