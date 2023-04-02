import { gql } from "@apollo/client";

const CONTRACT = "0x8ae7cd5bd5072011f57dc00b6f094df545efd1ad";

export const GET_NFTS = gql`
  query {
    tokens(
      orderBy: TOKEN_ID
      whereContract: { id: "${CONTRACT}" }
    ) {
      tokens {
        tokenID
        name
        image {
          url
        }
      }
    }
  }
`;

export const GET_NFT = (id: string) => {
  const query = gql`
    query {
      token(contract: "${CONTRACT}", tokenID: "${id}") {
        tokenID
        name
        createdAt
        createdBlock
        description
        image {
          url
        }
      }
    }
  `;

  return query;
};

export const GET_COLLECTION = gql`
  query {
    contract(id: "${CONTRACT}") {
      id
      name
    }
  }
`;
