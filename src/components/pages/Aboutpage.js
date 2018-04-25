import React, { Component } from 'react';

import AboutIntro from '../about/AboutIntro';
import ProfileBox from '../about/ProfileBox';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <AboutIntro/>
        <ProfileBox/>
      </div>
    );
  }
}

export default Aboutpage;
