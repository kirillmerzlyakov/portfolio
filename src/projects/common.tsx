import cn from "./projects.module.less";

export const renderTextBlock = (text: string) => (
  <div className={cn["text-block"]}>{text}</div>
);

export const renderImageBlock = (folder: string, number: number) => (
  <img
    className={cn["image"]}
    src={`./${folder}/${number}.jpg`}
    alt="картинка"
  />
);

export function renderVideoBlock(title: string, src: string) {
  return (
    // <div className={cn["video-wrapper"]}>
      <iframe
        className={cn["video"]}
        src={src}
        frameBorder="0"
        width="1600"
        height="900"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    // </div>
  );
}

export function renderVideoBlock1(title: string, src: string) {
  const element = document.querySelector(".projects-content");
  // console.log(element);
  // return (
  //   <video loop className={cn["video"]} id="video">
  //     <source type="video/mp4" src="https://player.vimeo.com/video/643858135" />
  //   </video>
  // );

  // return (
  //   <video preload="none" src="https://player.vimeo.com/fa43ebd5-55bc-4bde-9d0c-5ba1513772bf"></video>
  // )

  return (
    <video
      width="480"
      controls
      // poster="https://i.vimeocdn.com/video/1295228674-16ae46c72afab27c0b7da4706e6638b738671ba604d08c614"
    >
      <source
        src="https://i.vimeocdn.com/video/1295228674-16ae46c72afab27c0b7da4706e6638b738671ba604d08c614"
        type="video/mp4"
      />
      {/* <source
        src="https://player.vimeo.com/video/643858135"
        type="video/ogg"
      />
      <source
        src="https://player.vimeo.com/video/643858135"
        type="video/webm"
      /> */}
      {/* Your browser doesn't support HTML5 video tag. */}
    </video>
  );
  return (
    <iframe
      className={cn["video"]}
      src={src}
      frameBorder="0"
      // width="1120"
      height="630"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  );
}

//
{
  /* <video preload="none" tabindex="-1" disablepictureinpicture="" style="" src="blob:https://player.vimeo.com/fa43ebd5-55bc-4bde-9d0c-5ba1513772bf"></video> */
}
