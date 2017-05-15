const React = require('react');

const ErrorModal = React.createClass({
  componentDidMount() {
    console.log('error modal mounted');
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    let {message} = this.props;
    return (
      <div className='reveal tiny text-center' id='error-modal' data-reveal=''>
        <h4>Application Error</h4>
        <p>{message}</p>
        <button className='button hollow expanded' data-close=''>Close</button>
      </div>
    )
  }
});

ErrorModal.propTypes = {
  message: React.PropTypes.string
}

module.exports = ErrorModal;
