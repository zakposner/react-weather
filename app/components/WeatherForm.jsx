const React = require('react');

const WeatherForm = React.createClass({
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  },
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) { // if valid location
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  }
});


module.exports = WeatherForm;
