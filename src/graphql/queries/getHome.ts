import { gql } from 'graphql-request'

export const GET_HOME = gql`
  query {
    allDepoimentos {
      id
      autor
      conteudo
      foto {
        id
        url
        alt
      }
    }
  }
`
