var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Main = React.createClass({
  render: function () {
    return (
    <div>
      this is Main
      {this.props.children}
      <Link to='/firstPlace'>
      <button type='button' className='btn btn-lg btn-success'>
        Get Started
      </button>
      </Link>
      <svg>
      </svg>
    </div>
    )
  }
})

module.exports = Main
