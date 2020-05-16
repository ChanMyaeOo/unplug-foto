import React from "react";
import unsplash from "../api/unsplash";
import "./normalize.css";
import Navbar from "./Navbar";
import Header from "./Header";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Header onSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
