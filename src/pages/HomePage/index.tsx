import { Container, Divider, Grid } from "@mui/material";
import CollectionHeader from "../../components/CollectionHeader";
import NFTCard from "../../components/cards/NFTCard";

// Move to types file
export interface TokenProps {
  tokenID: string;
  name: string;
  image: {
    url: string;
  };
}

const tokens = [
  {
    tokenID: "4",
    name: "New Worlds - by Dario De Siena",
    image: {
      url: "https://arweave.net/uTs8UJaupKwI51pO_FlY8kTkccV5rJiSD5LKtzMXdLg",
    },
  },
  {
    tokenID: "3",
    name: "Dream Big - by Dario De Siena",
    image: {
      url: "https://arweave.net/AS_DZjWS6N_yZvptGcvfX9eJ9J1Y-ZYY0pm120KlahA",
    },
  },
  {
    tokenID: "2",
    name: "Liquidity - by Dario De Siena",
    image: {
      url: "https://arweave.net/sqWoZN444bwJSYw26iEMtKc3o5Bicn-q_dUeT0yxsdE",
    },
  },
  {
    tokenID: "1",
    name: "Not Without You - by Dario De Siena",
    image: {
      url: "https://arweave.net/rYzDdj3395iI0xprTtEi1p3P9cVkeZUzA6QSFIOLbzw",
    },
  },
  {
    tokenID: "6",
    name: "Meta - by Dario De Siena",
    image: {
      url: "https://arweave.net/UJtHoil1BLdHRLt_vlT1kxf2VWHt43udZR2FSzysCmg",
    },
  },
  {
    tokenID: "5",
    name: "Holy - by Dario De Siena",
    image: {
      url: "https://arweave.net/KdRU2lXrUYBsbb0hFsjXupDv2UjE-SnC96npnUwA0VY",
    },
  },
];

const HomePage = () => {
  return (
    <Container sx={{ py: { xs: 5, md: 7, lg: 10 } }}>
      <CollectionHeader />

      <Divider sx={{ mb: 6, mt: 3 }} />

      <Grid container spacing={3} justifyContent="center">
        {tokens?.map?.((item: TokenProps) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.tokenID}>
            <NFTCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
