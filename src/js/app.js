var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

// A simple navigation component
var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/team">Meet the team</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <main>
        <Navigation/>
        {this.props.children}
      </main>
    );
  }
});

// home "page"
var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Homepage!</h1>
        <p>Welcome to the homepage! Try to click on a link in the nav, then click the browser back button.</p>
      </div>
    );
  }
});

// about "page"
var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About Page!</h1>
        <p>Welcome to the about page!</p>
      </div>
    );
  }
});

// team "page"
var Team = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Meet the team!</h1>
        <p>Welcome to the team page!</p>
      </div>
    );
  }
});

// not found "page"
var NotFound = React.createClass({
  render: function() {
    return (
      <div>Not Found!</div>
    );
  }
});

/*
The routes. This section says:
  - If the route starts with /, load the App component
  - If the route IS /, load the Home component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is /team, load the Team component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is anything else, load the NotFound component INSIDE App as this.props.children

The whole process lets us create **complex, nested user interfaces** with minimal effort,
by simply nesting `Route` components.
*/

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="team" component={Team}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
