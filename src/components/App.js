import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Title from './Title'
import './Title.css'  //for footer styling

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
      this.onSubmit('avengers')
  }

  onSubmit = (input) => {
    const response = youtube.get("/search", {
      params: {
        q: input,
      },
    });
    response.then((result) => {
      this.setState({
        videos: result.data.items,
        selectedVideo: result.data.items[0],
      });
      // this.setState({ videos: response.data.items });
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Title/>
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid container stackable">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="ui five wide column body">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                allvideos={this.state.videos}
              />
            </div>
          </div>
        </div>
        
        <div className='footer'>Made with <span>&hearts;</span> by YASH...</div>
      </div>
    );
  }
}

export default App;
