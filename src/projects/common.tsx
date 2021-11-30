import cn from "./projects.module.less";

export const renderImageBlock = (folder: string, number: number) => (
  <img
    className={cn["image"]}
    src={`./${folder}/${number}.jpg`}
    alt="здесь должна быть пикча крутого интерфейса"
  />
);

export function renderVideoBlock(title: string, src: string) {
  return (
    <div className={cn["thumb-wrap"]}>
      <iframe
        src={src}
        width="640"
        height="360"
        frameBorder="0"
        web-kitAllowFullScreen
        moz-AllowFullScreen
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}
