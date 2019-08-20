import { gql } from "apollo-boost";

const getBookQuery = gql`
   query($id:ID) {
     book(id:$id) {
       id
       name
       genre
       author {
         id
         name
         age
         books {
            id
            name
         }
       }
     }
   }
`;

const getBooksQuery = gql`
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

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
