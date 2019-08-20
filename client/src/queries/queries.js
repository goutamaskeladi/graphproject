import { gql } from "apollo-boost";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($id: String!, $name: String!, $genre: String!, $authorId: ID!) {
    addBook(_id: $id, name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBookQuery, addBookMutation };
