import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onVideoSelect(this.props.video);
        }}
        className="video-item item"
        style={{ marginBottom:'5px', marginTop:'5px' }}
      >
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
          <div style={{color:'#ffffff'}} className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
