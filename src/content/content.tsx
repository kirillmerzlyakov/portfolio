import React from "react";
import "./content.css";

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/643858135"
            width="1120"
            height="630"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="skin-scan-video"
          ></iframe>
        </div>
        {[2, 3, 4, 5, 6].map((a) => this.getImageBlock(a.toString()))}
      </div>
    );
  }

  getImageBlock(number: string) {
    return (
      <img
        className="image"
        src={`./skinscan/content-${number}.jpg`}
        alt="картинка"
      ></img>
    );
  }
}
