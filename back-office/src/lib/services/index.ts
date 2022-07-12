import { gql } from '@apollo/client'

// Admin (get products - add - edit - delete - disable product - search / sort products - pagination products)

export const GET_ALL_PRODUCTS = gql`
  query Query {
    products {
      name
      description
      quantity
      id
      price
      image
      discount
      rate
      createdAt
      editedAt
      userId
      categoryId
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation Mutation($input: ProductInput!) {
    addProduct(input: $input) {
      id
      name
      description
      quantity
      price
      image
      discount
      rate
      createdAt
      editedAt
      userId
      categoryId
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation Mutation($updateProductId: ID!, $input: ProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      id
      name
      description
      quantity
      editedAt
      createdAt
      rate
      discount
      image
      price
      categoryId
      userId
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`

export const DISABLE_PRODUCT = gql`
  mutation Mutation($disableProductId: ID!) {
    disableProduct(id: $disableProductId)
  }
`

// get notifications
// get messages (email) --> external api call

export const GET_ALL_NOTIFICATIONS = gql`
  query Query {
    notifications {
      id
      title
      text
      createdAt
    }
  }
`

export const GET_NOTIFICATION_BY_ID = gql`
  query Query($id: ID!) {
    notification(id: $id) {
      id
      title
      text
      createdAt
    }
  }
`

export const GET_ALL_MESSAGES = gql`
  query Query {
    messages {
      id
      title
      text
      createdAt
    }
  }
`

export const GET_MESSAGE_BY_ID = gql`
  query Query($id: ID!) {
    message(id: $id) {
      id
      title
      text
      createdAt
    }
  }
`

export const PAGINATION_QUERY = gql`
  query Query($page: Int) {
    products(page: $page) {
      name
      description
      quantity
      id
      price
      image
      discount
      rate
      createdAt
      editedAt
      userId
      categoryId
    }
  }
`

export const GET_ANALYTICS_DATA = gql`
query Query() {
}
`
