import { gql } from 'graphql-request'

export const GET_HOME = gql`
  query {
    allTestimonials {
      id
      author
      content
      photo {
        id
        url
        alt
      }
    }

    allProjects {
      id
      title
      shortDescription
      link
      cover {
        id
        url
        alt
        width
        height
      }
    }
  }
`
