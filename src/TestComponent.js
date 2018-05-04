import React from 'react';

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHint: false
    };
  }

  render() {
    return (
      <div>
        <h3>TestComponent</h3>
        <button onClick={this.showTheHint.bind(this)}>button</button>
        {
          this.props.more ?
            <div>
                More: Ein Text und so weiter
            </div> :
            null
        }
        {
          this.state.showHint ?
            <div>Hint: A Test Component</div> :
            null
        }
      </div>
    );
  }

  showTheHint() {
    this.setState({
      showHint: true
    });
  }
}