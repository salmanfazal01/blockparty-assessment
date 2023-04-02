import { useQuery } from "@apollo/client";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Stack, Typography } from "@mui/material";
import { GET_COLLECTION } from "../../GraphQL/Queries";
import { buildEtherscanAddresslink, smallerString } from "../../utils/helpers";
import CopyToClipBoardButton from "../buttons/CopyToClipboardButton";

const CollectionHeader = () => {
  const { data } = useQuery(GET_COLLECTION);

  const _id = data?.contract?.id || "ID";
  const _name = data?.contract?.name || "Name";

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
          <Typography>{smallerString(_id)}</Typography>
        </CopyToClipBoardButton>

        <a
          href={buildEtherscanAddresslink(_id)}
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
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
