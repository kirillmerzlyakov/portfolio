export const renderTextBlock = (text: string) => (
  <div className="text-block">{text}</div>
);

export const renderImageBlock = (folder: string, number: number) => (
  <img className="image" src={`./${folder}/${number}.jpg`} alt="картинка"></img>
);
