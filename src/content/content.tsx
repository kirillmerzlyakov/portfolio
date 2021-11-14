import React from "react";
import "./content.css";

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {[1, 2, 3, 4, 5, 6].map((a) => this.getImageBlock(a.toString()))}
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
