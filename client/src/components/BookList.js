import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    let { loading, books } = this.props.data;
    if (loading) {
      return <h4>Loading books ....</h4>;
    } else {
      return books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
