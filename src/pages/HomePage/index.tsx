import { useQuery } from "@apollo/client";
import { Container, Divider, Grid } from "@mui/material";
import { GET_NFTS } from "../../GraphQL/Queries";
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

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_NFTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const tokens = data?.tokens?.tokens || [];

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
