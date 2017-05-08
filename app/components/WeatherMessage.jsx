const React = require('react');

// const WeatherMessage = React.createClass({
//   render() {
//     let {location, temp} = this.props;
//
//     return (
//       <p>It's currently {temp} degrees in {location}</p>
//     )
//   }
// });

const WeatherMessage = ({temp, location}) => {
  // let {temp, location} = props;
  return (
    <p>It's currently {temp} degrees in {location}</p>
  )
}

module.exports = WeatherMessage;
