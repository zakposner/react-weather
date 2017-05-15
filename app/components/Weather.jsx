const React = require('react');
const Loading = require('react-loading');

// components
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');

// api
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false,
      errorMessage: ''
    }
  },
  render() {
    let {isLoading, location, temp, errorMessage} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <Loading type='bars' color='#000000' className='text-center' />
      } else if (temp && location) {
        return <WeatherMessage
          temp={temp}
          location={location} />
      }
    }

    const renderError = () => {
      if (errorMessage.length > 0) {
        return <ErrorModal message={errorMessage} />
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get the Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  },
  handleSearch(location) { // API CALL
    this.setState({
      isLoading: true, // show loading text while processing
      errorMessage: '' // clear any previous errors on new search
    })

    let that = this; // reference to component

    openWeatherMap.getTemp(location)
      .then((temp) => { // If successful
        that.setState({ // set temp and location
          location,
          temp,
          isLoading: false // remove loading state
        });

      })
      .catch((e) => { // If not successful
        that.setState({
          isLoading: false, // remove loading state
          errorMessage: 'city not found' // update the errorMessage
        });

      });
  }
});

module.exports = Weather;
