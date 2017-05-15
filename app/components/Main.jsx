const React = require('react');

// Components
const Nav = require('Nav');

const Main = (props) => {
  return (
    <div className='centered'>
      <Nav />
      <div className='row'>
        <div className='columns medium-6 large-4 small-centered'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;

// props.children - populates the main container component with whatever
// children components are created by react router in app.jsx
