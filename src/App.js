import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';

 { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Can Of Books Auth</h1>
      <>
      <Profile />
      <BestBooks />
      <Login />
      <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
      :
      <Logout />
      </>
    )
  }
}

export default App;






        
