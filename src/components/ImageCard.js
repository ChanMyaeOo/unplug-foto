import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { url, description } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={url} alt={description} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
