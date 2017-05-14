import React from 'react';

class HomePage extends React.Component {

  state : {
    current : "home",
  }

  render() {
    return (
      <div id='homPage'>
        <h1>
          This is home page.
        </h1>
      </div>
    );
  }
}

export default HomePage;
