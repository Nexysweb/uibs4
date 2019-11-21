import React from 'react';

import Hoc from '@nexys/reactutils';

class Input extends React.Component {
  render() {
    return (<input
      className={this.props.className}
      type={this.props.type}
      placeholder={this.props.placeholder}
      value={this.props.value}
      onChange={this.props.onChange}
      onFocus={this.props.onFocus}
      onBlur={this.props.onBlur}
      disabled={this.props.disabled}
      style={this.props.style}
      autoFocus={this.props.autoFocus}
      />);
  }
}

export default Hoc.Input()(Input);
