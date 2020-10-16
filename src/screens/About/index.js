import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_URL } from 'src/constants/url';

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to={ROUTER_URL.HOME}>Home</Link>
      </div>
    );
  }
}

export default About;
