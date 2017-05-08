const React = require('react');
const Loading = require('react-loading');

// components
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

// api
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    }
  },
  render() {
    let {isLoading, location, temp} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <Loading type='bars' color='#000000' />
      } else if (temp && location) {
        return <WeatherMessage
          temp={temp}
          location={location} />
      }
    }

    return (
      <div>
        <h3>Get the Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  },
  handleSearch(location) { // API CALL
    this.setState({
      isLoading: true // show loading text while processing
    })

    let that = this; // reference to component

    openWeatherMap.getTemp(location)
      .then((temp) => { // If successful
        that.setState({ // set temp and location
          location,
          temp,
          isLoading: false // & remove loading state
        })
      })
      .catch((err) => { // If not successful
        that.setState({
          isLoading: false // remove loading state
        })
        alert(err); //  & alert the error to the user
      })
  }
});


module.exports = Weather;


// Functions in the component vs functions in the render functions

  // Functions nested within the component (sibling to the render function)
  // are primarily for:
    // 1. altering the state of the component
    // 2. changing the props of subcomponents
    // 3. passing callbacks down to subcomponents

  // Functions nested within the render function are for conditionally
  // deciding what to render, based on the state of the component
    // these functions are then called within jsx expressions
    // these functions should return JSX
