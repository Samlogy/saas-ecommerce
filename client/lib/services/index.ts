import { gql } from '@apollo/client'

// export const GET_ALL_PRODUCTS = gql`
//   query Query {
//     products {
//       name
//       description
//       quantity
//       id
//       price
//       image
//       discount
//       rate
//       createdAt
//       editedAt
//       userId
//       categoryId
//     }
//   }
// `
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
export const GET_ALL_PRODUCTS_FILTER_SORT = gql``

export const GET_PRODUCT_DETAILS = gql`
  query Query($productId: ID!) {
    products(id: $productId) {
      id
      name
      image
      description
      price
      quantity
      discount
      reviews
      rate
      createdAt
      editedAt
    }
  }
`
export const GET_RELATED_PRODUCTS = gql``

export const GET_ALL_COMMENTS = gql`
  query Query($productId: ID!) {
    comments(id: $productId) {
      id
      name
      comment
      createdAt
    }
  }
`
export const GET_ALL_IMAGES = gql`
  query Query($productId: ID!) {
    images(id: $productId) {
      id
      url
    }
  }
`
export const CREATE_COMMENT = gql`
  mutation Mutation($input: CommentInput!) {
    addComment(input: $input)
  }
`

export const CREATE_CONTACT = gql`
  mutation Mutation($input: ContactInput!) {
    addContact(input: $input)
  }
`

export const GET_USER_DATA = gql`
  query Query {
    user {
      id
      fullName
      username
      mobile
      avatar
      email
      address
      createdAt
      # customer
      postaleCode
      countryCode
      address_1
      address_2
      # vendor
      companyName
      companyCode
      description
      companyCountryCode
      companyPostaleCode
      companyAddress
    }
  }
`
export const UPDATE_PROFILE = gql`
  mutation Mutation($userId: ID!, $input: ProfileInput!) {
    updateProfile(id: $userId, input: $input)
  }
`
