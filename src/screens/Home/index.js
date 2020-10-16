import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_URL } from 'src/constants/url';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to={ROUTER_URL.ABOUT}>About</Link>
      </div>
    );
  }
}

export default Home;
