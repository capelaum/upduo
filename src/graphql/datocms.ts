import { GraphQLClient, Variables } from 'graphql-request'

interface Headers {
  Authorization: string
  [key: string]: string
}

interface DatoCmsRequestOptions {
  query: string
  variables?: Variables
  includeDrafts?: boolean
  excludeInvalid?: boolean
}

export function DatoCmsRequest({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: DatoCmsRequestOptions) {
  const headers: Headers = {
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  }

  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }

  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }

  const client = new GraphQLClient('https://graphql.datocms.com', { headers })

  return client.request(query, variables)
}
