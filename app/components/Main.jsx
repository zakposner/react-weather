const React = require('react');

// Components
const Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;

// props.children - populates the main container component with whatever
// children components are created by react router in app.jsx
