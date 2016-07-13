/**
 * Create a new React component
 */

var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    componentDidMount: function() {
        console.log('render myComponent'); // => true
    },
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});

 /**
  * Render the component
  */
  ReactDOM.render(
      <MyComponent/>,
      document.getElementById('content')
  );
