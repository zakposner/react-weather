const React = require('react');

const About = (props) => {
  return (
    <div>
      <p>Made with love using React.js by this guy:</p>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1024px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg' className='me-img'></img>
      <a href='https://github.com/zakposner/react-weather' target='_blank'>
        <button className='button large'>
          Veiw the Code
        </button>
      </a>
    </div>
  )
}

module.exports = About;
