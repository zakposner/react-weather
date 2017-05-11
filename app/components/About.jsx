const React = require('react');

// Traditional Way of declaring Componenets

// const About = React.createClass({
//   render() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// Since About does not manage state, it is called a
  // 'Stateless Functional Component'

// As such, we can refactor it to simplify the syntax, as follows

const About = (props) => {
  return (
    <h3>About Component</h3>
  )
}

module.exports = About;

// NOTE:
  // Anywhere this.props is called can be changed to just props
  // as props is now an argument passed to the function, instead of a property
  // on an object we are trying to access
