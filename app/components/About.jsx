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
    <div>
      <p>Made with love using React.js by this guy:</p>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1024px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg' className='me-img'></img>
      <a href='https://github.com/zakposner/react-weather' target='_blank'>
        <button className='button'>
          Veiw the Code
        </button>
      </a>
    </div>
  )
}

module.exports = About;

// NOTE:
  // Anywhere this.props is called can be changed to just props
  // as props is now an argument passed to the function, instead of a property
  // on an object we are trying to access
