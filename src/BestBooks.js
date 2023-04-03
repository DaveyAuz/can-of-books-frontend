import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      console.log('token: ' + jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}`},
        method : 'GET',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
      }
      let bookData = await axios(config);

      this.setState({ books: bookData.data });
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    )
  }
}

export default with.Auth0 {BestBooks};
