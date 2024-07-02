import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import Article from 'src/components/Article'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

interface Props
  extends CellSuccessProps<FindArticleQuery, FindArticleQueryVariables> {
  id: number
}

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }: Props) => {
  return <Article article={article} />
}
