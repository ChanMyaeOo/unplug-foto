import React from "react";
import "./SearchInput.css";

class SearchInput extends React.Component {
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    const { text, inputStyle } = this.props;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder={text}
          value={this.state.term}
          onChange={this.onSearchChange}
          className={inputStyle}
        />
      </form>
    );
  }
}
export default SearchInput;
