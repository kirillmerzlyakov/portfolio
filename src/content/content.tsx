import React from "react";
import "./content.css";

const VIDEO_SOURCES: { [key: string]: string } = {
  "Act-Contract-0": "https://player.vimeo.com/video/643858135",
  "Act-Contract-1":
    "https://player.vimeo.com/video/645741904?h=4571ce8281&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "Act-Contract-2":
    "https://player.vimeo.com/video/645741574?h=f4882dc24c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {[2, 3, 4, 5, 6].map((a) => this.getImageBlock(a.toString()))}
        <div className="video-wrapper">
          {Object.keys(VIDEO_SOURCES).map((titleVideo) =>
            this.getVideoBlock(titleVideo, VIDEO_SOURCES[titleVideo])
          )}
        </div>
      </div>
    );
  }

  getImageBlock(number: string) {
    return (
      <img
        className="image"
        src={`./skinscan/${number}.jpg`}
        alt="картинка"
      ></img>
    );
  }

  getVideoBlock(title: string, src: string) {
    return (
      <iframe
        src={src}
        frameBorder="0"
        width="1120"
        height="630"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    );
  }
}
