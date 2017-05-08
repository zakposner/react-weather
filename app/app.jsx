const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);

// <Router history={hashHistory} >
  // hashHistory specs imported from react-router

//   <Route path="/" component={Main}>
  //    <Route path="about" component={About} />

  // ^ essentially the inner path = '/' + 'about' = '/about'
