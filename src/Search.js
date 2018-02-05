//@flow
import React, {Component} from 'react';

type State = {
  inputValue: string,
};

type Props = {
  onSearch: (string) => Promise<*>,
};

class Search extends Component<Props, State> {
  state = {
    inputValue: '',
  };
  // componentDidUpdate() {
  //   if (this.props.isReset) {
  //     this.setState({inputValue: ''});
  //     this.props.resetBack();
  //   }
  // }

  render() {
    let onSearchBox = (event) => {
      this.setState({inputValue: event.target.value});
      console.log(event.target.value);
    };
    let onClick = () => {
      this.props.onSearch(this.state.inputValue);
      console.log('>>>', this.state.inputValue);
    };
    return (
      <div>
        <input
          type="text"
          onChange={onSearchBox}
          value={this.state.inputValue}
        />
        <button onClick={onClick} label="Submit">
          submit
        </button>
      </div>
    );
  }
}

export default Search;
