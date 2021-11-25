import cn from "./projects.module.less";

export const renderTextBlock = (text: string) => (
  <div className={cn["text-block"]}>{text}</div>
);

export const renderImageBlock = (folder: string, number: number) => (
  <img
    className={cn["image"]}
    src={`./${folder}/${number}.jpg`}
    alt="картинка"
  ></img>
);

export function renderVideoBlock(title: string, src: string) {
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
