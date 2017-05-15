const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  onSearch(e) { // search for weather from any page
    e.preventDefault();
    // FIXME
  },
  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className="menu">
            <li className='menu-text'>React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active">Forecast</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='Enter a location'></input>
              </li>
              <li>
                <button type='button' className='button hollow' value='Get Weather'>Get the Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Nav;

// Why use <Link></Link> instead of <a>
  // Link allows you a couple of extra features over a
    // for instance you can add rules for custom styling if a link represents
    // the page the user is actively viewing
      // activeClassName
      // activeStyle

// Why to use IndexLink
  // We are currently telling react-router to apply the active class to all
  // links which match the current url

  // That means that the weather link will always be bold because the Weather
  // component is displayed for the base url of "/"

  // Setting the Link that represents the IndexRoute to be a IndexLink will
  // ensure that the index route is not made active for other pages
