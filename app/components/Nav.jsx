const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = (props) => {
  return (
    <div>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active">Get the Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </div>
  )
}

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
