import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;

export const CREATE_SQUAD = gql`
  mutation createSquad($name: String!, $characters: [ID!]!) {
    createSquad(name: $name, characters: $characters) {
      id
      name
      characters {
        name
      }
    }
  }
`;
